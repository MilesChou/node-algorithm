'use strict';

/**
 * Expose `Combination`.
 */

module.exports = Combination;

function Combination() {
}

Combination.prototype.run = function(set, selection) {
  // Generator array
  function range(start, end, step) {
    var step = step || 1;
    var result = []
    for (var i = start; i <= end ; i += step) {
      result.push(i);
    }

    return result;
  }

  // Initial M and N
  var m = set.length;
  var n = selection;
  set.unshift('');

  if (m < n || n <= 0) {
    throw new Error('Input is invalid');
  }

  // Store function
  var storeFunction = function (indexArray, set) {
    var result = [];
    for (var v in indexArray) {
        result.push(set[indexArray[v]]);
    }

    return result.join(',');
  };

  // Generator array
  var indexArray = range(1, selection);

  // Initial result
  var result = [];

  // First element
  result.push(storeFunction(indexArray, set));

  // Initial loop var
  var pos;
  while (indexArray[0] < m - n + 1) {
    if (indexArray[n - 1] != m) {
      pos = n - 1;
    } else {
      pos = n - 2;
      while (indexArray[pos + 1] - indexArray[pos] == 1) {
        pos--;
      }
    }

    indexArray[pos]++;

    for (var i = pos + 1; i < n; ++i) {
      indexArray[i] = indexArray[i - 1] + 1;
    }

    result.push(storeFunction(indexArray, set));
  }

  return result;
}
