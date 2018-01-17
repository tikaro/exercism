'use strict';

var Binary = function(input) {
  this.input = input;
}

Binary.prototype.toDecimal = function() {
  var inputArray = this.input.split();

  var decimalValue = 0;

  for(var i=inputArray.length; i>0; i--) {
    console.log(`Hi John: i is ${i}`);
    decimalValue += inputArray[i-i] * 2^i;
  }

  return decimalValue;
}

module.exports = Binary;