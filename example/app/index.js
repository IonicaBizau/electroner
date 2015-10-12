var App = require('app')
  , BrowserWindow = require('browser-window')
  ;

var mainWindow = null;

// Quit when all windows are closed.
App.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

App.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 200
      , height: 800
      , y: 10
      , x: 35
    });
    mainWindow.loadUrl('file://' + __dirname + '/index.html');
    //mainWindow.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    });
    mainWindow.on("focus", function () {
        console.log(">");
    });
});
