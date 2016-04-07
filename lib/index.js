"use strict";

// Dependencies
const spawn = require("spawno")
    , oArgv = require("oargv")
    , electronPath = require("electron-prebuilt")
    ;

/**
 * electroner
 * Starts the Electron process.
 *
 * @name electroner
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
module.exports = function electroner (path, options, callback) {

    if (!path) {
        return callback(new Error("The path argument is mandatory."));
    }

    if (typeof options === "function") {
        callback = options;
        options = null;
    }

    options = options || {};
    options._ = [path];

    let cwd = options.cwd || (process && process.cwd()) || __dirname;
    delete options.cwd;

    // Run the command
    return spawn(electronPath, oArgv(options), { cwd: cwd, _showOutput: true }, callback);
};
