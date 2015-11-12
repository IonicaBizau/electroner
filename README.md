[![electroner](http://i.imgur.com/z3xjvS3.png)](#)

# electroner [![Support this project][donate-now]][paypal-donations]

Start ElectronJS apps from Node.js.

## Installation

```sh
$ npm i electroner
```

## Example

```js
// Dependencies
var Electroner = require("electroner");

// Start the Electron app
Electroner(__dirname + "/app/index.js", {
     "enable-transparent-visuals": true
   , "disable-cpu": true
});
```

## Documentation

### `Electroner(options, callback)`

#### Params
- **Object** `options`: The path to the main script or an object interpreted by [`oargv`](https://github.com/IonicaBizau/node-oargv) and optional fields:

 - `cwd` (String): An optional key representing directory where the electron
   process should be executed.
- **Function** `callback`: The callback function.

#### Return
- **Process** The Electron process.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md