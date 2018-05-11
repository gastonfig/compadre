const { dialog } = window.require('electron').remote;
var fs = window.require('fs');

export const loadImage = updateImage => {
  dialog.showOpenDialog(
    {
      filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]
    },
    function(filepath) {
      if (filepath === undefined) {
        console.log('No file selected');
        return;
      }

      fs.readFile(filepath[0], (err, data) => {
        if (err) {
          alert('An error ocurred reading the file :' + err.message);
          return;
        }

        const base64Image = new Buffer(data, 'binary').toString('base64');
        updateImage(base64Image);
      });
    }
  );
};
