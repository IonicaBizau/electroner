var App = require('app')
  , BrowserWindow = require('browser-window')
  ;

var mainWindow = null;

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
