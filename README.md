# performancenow

[![npm version](https://badge.fury.io/js/performancenow.svg)](https://badge.fury.io/js/performancenow)
[![Build Status](https://travis-ci.org/yefremov/performancenow.svg?branch=master)](https://travis-ci.org/yefremov/performancenow)

Simple `performance.now()` polyfill for old browsers and node.

## Installation
```bash
$ npm install performancenow
```

## API
Make sure to import `performancenow` module in your application entrypoint, it
will make a time stamp to measure against on every subsequent call.

```js
import 'performancenow';
```

Then just import as a usual module wherever you need it.

```js
import now from 'performancenow';

let timestamp = now();
// => 15.02
```

To polyfill `performance.now()` function.

```js
(function (global) {
  global.performance = global.performance || {};
  global.performance.now = global.performance.now || require('performancenow');
}).call(this);
```

## Running tests

```bash
$ npm test
```

## License

[MIT](LICENSE)
