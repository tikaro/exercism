'use strict';

var Binary = function(input) {
  this.input = input;
}

Binary.prototype.toDecimal = function() {
 if (!/^[01]+$/.test(this.input)) {
   return 0;
 }
  
  var inputArray = this.input.split('');
  var decimalValue = 0;

  for(var i=inputArray.length; i>0; i--) {
    var currentBinaryValue = parseInt(inputArray[inputArray.length - i]);
    var binaryPlaceValue = 2**(i-1);
    var valueToAdd = currentBinaryValue * binaryPlaceValue;
    decimalValue += valueToAdd;
  }

  return decimalValue;
}

module.exports = Binary;