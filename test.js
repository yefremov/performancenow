var test = require('tape');
var performancenow = require('.');

test('performancenow()', function (t) {
  t.ok(typeof performancenow === 'function', 'should be a function');
  t.ok(typeof performancenow() === 'number', 'should return a number');
  t.ok(performancenow() >= 0, 'should return a positive value');
  t.end();
});
