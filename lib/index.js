// Dependencies
var Exec = require("child_process").exec
  , OArgv = require("oargv")
  , ElectronPath = require("electron-prebuilt")
  ;

/**
 * Electroner
 *
 * @name Electroner
 * @function
 * @param {Object} options The path to the main script or an object interpreted
 * by [`oargv`](https://github.com/IonicaBizau/node-oargv) and optional fields:
 *
 *  - `cwd` (String): An optional key representing directory where the electron
 *    process should be executed.
 *
 * @param {Function} callback The callback function.
 * @return {Process} The Electron process.
 */
var Electroner = module.exports = function (path, options, callback) {

    callback = callback || function (err) {
        if (err) {
            throw err;
        };
    };

    if (!path) {
        return callback(new Error("The path argument is mandatory."));
    }

    if (typeof options === "function") {
        callback = options;
        options = null;
    }

    options = options || {};

    var cwd = options.cwd || (process && process.cwd()) || __dirname;
    delete options.cwd;

    // Run the command
    return Exec(OArgv(options, ElectronPath), { cwd: cwd }, callback);
};
