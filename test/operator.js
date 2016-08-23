var assert = require('assert');
var Operator = require('..')

describe('Operator', function() {
  var operator = new Operator();

  describe('#add()', function() {
    it('should return 4 when input 1 and 3', function() {
      assert.equal(4, operator.add(1, 3));
    });
  });

  describe('#sub()', function() {
    it('should return 4 when input 7 and 3', function() {
      assert.equal(4, operator.sub(7, 3));
    });
  });

  describe('#mux()', function() {
    it('should return 4 when input 1 and 4', function() {
      assert.equal(4, operator.mux(1, 4));
    });
  });

  describe('#div()', function() {
    it('should return 4 when input 12 and 3', function() {
      assert.equal(4, operator.div(12, 3));
    });
  });
});
