# Compadre

A Mac app that overlays design comps on top of developed sites or apps to compare them.

## Build locally
1. Clone this repository
2. In the directory download the node module depencies `yarn install`
3. You need 2 terminal windows run this project
    - On one run `yarn start` to load the React app. You can ignore the browser window that opens automatically.
    - On the other terminal window run `yarn electron-dev` to start the Electron app.

### Build the app locally
`yarn electron-pack`

### Publish to GitHub
- Follow this [workflow](https://www.electron.build/configuration/publish#recommended-github-releases-workflow) and then run `yarn electron-publish`
