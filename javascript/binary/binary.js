'use strict';

var Binary = function(input) {
  this.input = input;
}

Binary.prototype.toDecimal = function() {
 if (!/^[01]+$/.test(this.input)) {
   return 0;
 }

  var inputArray  = this.input.split('').reverse();
  var outputArray = [];

  for(var i=0; i < inputArray.length; i++) {
    var currentBinaryValue = parseInt(inputArray[i], 10);
    var binaryPlaceValue = 2**(i);
    outputArray.push(currentBinaryValue * binaryPlaceValue);
  }

  var decimalResult = outputArray.reduce(function(previous, current) {
    return previous + current;
  });

  return decimalResult;
}

module.exports = Binary;