'use strict';

/**
 * Expose `Operator`.
 */

module.exports = Operator;

function Operator() {
}

Operator.prototype.add = function(a, b) {
  var c;
  c = a + b;

  return c;
}

Operator.prototype.sub = function(a, b) {
  var c;
  c = a - b;

  return c;
}

Operator.prototype.mux = function(a, b) {
  var c;
  c = a * b;

  return c;
}

Operator.prototype.div = function(a, b) {
  var c;
  c = a / b;

  return c;
}
