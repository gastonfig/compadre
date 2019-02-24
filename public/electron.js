const { app, BrowserWindow, Menu, session } = require('electron');
const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let ignoreMouseEvents = false;

function createWindow() {
  // Denies all permissions requests
  // https://electronjs.org/docs/tutorial/security#4-handle-session-permission-requests-from-remote-content
  session
    .fromPartition('some-partition')
    .setPermissionRequestHandler((webContents, permission, callback) => {
      return callback(false);
    });

  // Create the browser window.
  mainWindow = new BrowserWindow({
    contextIsolation: true,
    titleBarStyle: 'hiddenInset',
    // frame: false,
    height: 600,
    nodeIntegration: false,
    transparent: true,
    width: 800
  });

  const menuTemplate = [
    {
      label: 'Electron',
      submenu: [
        {
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          label: 'Open',
          click: () => {
            mainWindow.webContents.send('openFile');
          }
        }
      ]
    },
    {
      label: 'Actions',
      submenu: [
        {
          label: 'Always on top',
          type: 'checkbox',
          checked: mainWindow.isAlwaysOnTop(),
          click: () => {
            mainWindow.setAlwaysOnTop(!mainWindow.isAlwaysOnTop());
          }
        },
        {
          label: 'Click-through',
          type: 'checkbox',
          checked: ignoreMouseEvents,
          click: () => {
            mainWindow.setIgnoreMouseEvents(toggleMouseEvents());
          }
        },
        {
          label: 'Locked',
          type: 'checkbox',
          checked: !mainWindow.isMovable(),
          click: () => {
            mainWindow.setMovable(!mainWindow.isMovable());
          }
        },
        {
          type: 'separator'
        },
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' }
      ]
    },
    {
      role: 'window',
      submenu: [{ role: 'hide' }, { role: 'minimize' }]
    }
  ];

  // and load the index.html of the app.
  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(__dirname, '/../build/index.html'),
      protocol: 'file:',
      slashes: true
    });
  mainWindow.loadURL(startUrl);

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  // Workaround for bug where shadow is added if window is resized
  mainWindow.on('resize', function() {
    mainWindow.setHasShadow(false);
  });

  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

function toggleMouseEvents() {
  ignoreMouseEvents = !ignoreMouseEvents;
  return ignoreMouseEvents;
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Follows some of the recommendations from https://electronjs.org/docs/tutorial/security
app.on('web-contents-created', (event, contents) => {
  contents.on('will-attach-webview', (event, webPreferences) => {
    // Strip away preload scripts if unused or verify their location is legitimate
    delete webPreferences.preload;
    delete webPreferences.preloadURL;

    // Disable Node.js integration
    webPreferences.nodeIntegration = false;

    event.preventDefault();
  });

  contents.on('will-navigate', event => {
    event.preventDefault();
  });

  contents.on('new-window', (event, navigationUrl) => {
    // In this example, we'll ask the operating system
    // to open this event's url in the default browser.
    event.preventDefault();

    shell.openExternalSync(navigationUrl);
  });
});
