'use strict';;

var extractColumns = function(rows) {
  var columns = [];
  console.log(`there are ${rows.length + 1} rows...`);
  console.log(`row[0].length is ${rows[0].length}`);
  for(var i = 0; i <= rows[0].length; i++) {
    console.log(`processing row ${i}...`)
    //columns[i].push(rows[i][i]);
  }
}

var Matrix = function(input) {

  this.rows = input.split('\n').map( function(row) {
    return row.split(' ').map( function(char) {
      return parseInt(char, 10);
    })
  })

  this.columns = extractColumns(this.rows)
}

/*
var Matrix = function(input) {
  this.rows = input.split('\n').map( function (row) {
    return row.split(' ').map( function(char) {
      return parseInt(char, 10)
    })
  })
}
*/

module.exports = Matrix;