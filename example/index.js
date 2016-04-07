const electroner = require("../lib");

// Start the Electron app
electroner(__dirname + "/app/index.js", {
     "enable-transparent-visuals": true
   , "disable-cpu": true
});
