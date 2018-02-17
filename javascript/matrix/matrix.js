'use strict';

var extractColumns = function(rows) {
  var columns = [];
  rows.forEach( function(row) {
    row.forEach( function(n,index) {
      columns[index] = columns[index] || [];
      columns[index].push(n);
    })
  })
  return columns;
}

var extractRows = function(rows) {
  return rows.split('\n').map( function(row) {
    return row.split(' ').map( function(char) {
      return parseInt(char, 10);
    })
  })
}

var Matrix = function(input) {
  this.rows = extractRows(input);
  this.columns = extractColumns(this.rows);
}

module.exports = Matrix;