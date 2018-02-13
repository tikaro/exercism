'use strict';

var Matrix = function(input) {
  this.rows = input.split('\n').map( function (row) {
    return row.split(' ').map( function(char) {
      return parseInt(char, 10)
    })
  })
}

module.exports = Matrix;