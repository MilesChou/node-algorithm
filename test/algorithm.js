'use strict';

var assert = require('assert');
var Algorithm = require('..');

describe('Combination', function() {
  describe('#run()', function() {
    it('should return 1 element array and result is a, b, c, d when input a, b, c, d and select 4 elements', function() {
      // Arrange
      var set = ['a', 'b', 'c', 'd'];
      var selection = 4;
      var exceptedLength = 1;
      var exceptedElement = 'a,b,c,d';

      // Act
      var combination = new Algorithm.Combination();
      var actual = combination.run(set, selection);

      // Assert
      assert.equal(exceptedLength, actual.length);
      assert.equal(exceptedElement, actual.pop());
    });

    it('should return 10 element array and result include a, c, d when input a, b, c, d, e and select 3 elements', function() {
      // Arrange
      var set = ['a', 'b', 'c', 'd', 'e'];
      var selection = 3;
      var exceptedLength = 10;
      var exceptedElement = 'a,c,d';

      // Act
      var combination = new Algorithm.Combination();
      var actual = combination.run(set, selection);

      // Assert
      assert.equal(exceptedLength, actual.length);
      assert.ok(actual.indexOf(exceptedElement) != -1);
    });

    it('should return 3003 element array and result include "01,05,07,12,14" element when input 15 number elements and select 5 elements', function() {
      // Arrange
      var set = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];
      var selection = 5;
      var exceptedLength = 3003;
      var exceptedElement = '01,05,07,12,14';

      // Act
      var combination = new Algorithm.Combination();
      var actual = combination.run(set, selection);

      // Assert
      assert.equal(exceptedLength, actual.length, 'Result array length is not equal 3003');
      assert.ok(actual.indexOf(exceptedElement) != -1, 'Result does not inculde "01,05,07,12,14" element');
    });

    it('should throw error when input 3 elements and select 5 elements', function() {
      // Arrange
      var set = ['01', '02', '03'];
      var selection = 5;

      // Act
      var combination = new Algorithm.Combination();

      // Assert
      assert.throws(() => {
        combination.run(set, selection);
      }, Error);
    });

    it('should throw error when input 5 elements and select 0 elements', function() {
      // Arrange
      var set = ['a', 'b', 'c', 'd', 'e'];
      var selection = 0;

      // Act
      var combination = new Algorithm.Combination();

      // Assert
      assert.throws(() => {
        combination.run(set, selection);
      }, Error);
    });
  });
});

describe('Operator', function() {
  var operator = new Algorithm.Operator();

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
