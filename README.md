# performancenow

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

## Running tests

```bash
$ npm install
$ npm test
```

## License

[MIT](LICENSE)
