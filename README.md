# performancenow

Simple `performance.now()` polyfill for old browsers and node.

## API
Make sure to import `performanceNow` module in your application entrypoint, it
will make a time stamp to measure against on every subsequent call.

```js
import 'performanceNow';
```

Then just import as a usual module wherever you need it.

```js
import performanceNow from 'performanceNow';

let timeStamp = performanceNow();
// => 15.02
```

## Running tests

```bash
$ npm install
$ npm test
```

## License

[MIT](LICENSE)
