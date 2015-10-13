// Dependencies
var Electroner = require("../lib");

// Start the Electron app
Electroner(__dirname + "/app/index.js", {
     "enable-transparent-visuals": true
   , "disable-cpu": true
});
