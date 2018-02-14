'use strict';

/**
 * Given arrays of rows, extract an array of columns
 * @param {int[]} rows the array of rows
 * @returns {int[]} an array of columns parsed from the rows
 */
var columnsFromRows = function (rows) {
  var columns = [];
  rows.forEach(function (row) {
    row.forEach(function (n, index) {
      columns[index] = columns[index] || [];
      columns[index].push(n);
    });
  });
  return columns;
}

/**
 * Split the rows and convert the embedded numbers from strings to characters
 * @param {arr} inputString a string containing emmbedded newlines
 * @returns {arr} an array of the parsed rows
 */
var parseRows = function (inputString) {
  return inputString.split('\n').map(function (row) {
    return row.split(' ').map(function (char) {
      return parseInt(char, 10);
    });
  });
}

/**
 * Create a matrix of numbers from a raw string
 * @param {str} inputString a string containing embedded newlines
 * @return {undefined}
 */
var Matrix = function (inputString) {
  this.rows = parseRows(inputString);
  this.columns = columnsFromRows(this.rows);
}

module.exports = Matrix;