
/**
 * Module dependencies.
 */

var datenow = require('datenow');

/**
 * Expose `performancenow`.
 */

module.exports =
  typeof performance !== 'undefined' && typeof performance.now === "function"
    ? function performancenow() {
      return performance.now()
    }
    : (function (offset) {
      return function performancenow() {
        return datenow() - offset;
      }
    }(datenow()));
