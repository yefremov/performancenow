var test = require('tape');
var performanceNow = require('.');

test('performanceNow()', function (t) {
  t.ok(typeof performanceNow === 'function', 'should be a function');
  t.ok(typeof performanceNow() === 'number', 'should return a number');
  t.ok(performanceNow() >= 0, 'should return a positive value');
  t.end();
});
