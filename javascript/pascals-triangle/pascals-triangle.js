/*
var sumElements = function(element, index, array) {
  self.push(element + (array[index + 1] || 0));
}

var generateRows = function(rowCount) {
  var result = [[1]];
  for (var n = 1; n < rowCount; n++) {
    var newRow = [1];
    result[n - 1].forEach(sumElements, newRow);
    result.push(newRow);
  }
  return result;
}
*/

var Triangle = function(rowCount) {
  this.rowCount = rowCount;
}

Triangle.prototype.rows = function() {
  var result = [[this.rowCount]];
  console.log(`this.rowCount is ${this.rowCount}`);
  console.log(`result is ${result}`);
  return result;
}

module.exports = Triangle;