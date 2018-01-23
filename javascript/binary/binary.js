'use strict';

const DEBUG = false;

var Binary = function(input) {
  this.input = input;
}

Binary.prototype.toDecimal = function() {
 if (!/^[01]+$/.test(this.input)) {
   return 0;
 }
  
  var inputArray = this.input.split('').reverse();
  var decimalValue = 0;

  DEBUG && console.log(`++++++++++++++++ ${this.input} +++++++++++++++++`)

  for(var i=0; i < inputArray.length; i++) {
    var currentBinaryValue = parseInt(inputArray[i]);
    DEBUG && console.log(`currentBinaryValue is ${currentBinaryValue}`);

    var binaryPlaceValue = 2**(i);
    DEBUG && console.log(`binaryPlaceValue is ${binaryPlaceValue}`);

    var valueToAdd = currentBinaryValue * binaryPlaceValue;
    DEBUG && console.log(`valueToAdd is ${valueToAdd}`);

    decimalValue += valueToAdd;
    DEBUG && console.log(`decimalValue is now ${decimalValue}`);
  }

  return decimalValue;
}

module.exports = Binary;