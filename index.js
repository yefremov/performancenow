
/**
 * Module dependencies.
 */

var now = require('datenow');

module.exports =
  typeof performance !== 'undefined' && typeof performance.now === "function"
    ? function () {
      return performance.now()
    }
    : (function (offset) {
      return function () {
        return now() - offset;
      }
    }(now()));
