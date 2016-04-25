## Documentation

You can see below the API reference of this module.

### `electroner(options, callback)`
Starts the Electron process.

#### Params
- **Object** `options`: The path to the main script or an object interpreted by [`oargv`](https://github.com/IonicaBizau/node-oargv) and optional fields:

 - `cwd` (String): An optional key representing directory where the electron
   process should be executed.
- **Function** `callback`: The callback function.

#### Return
- **Process** The Electron process.

