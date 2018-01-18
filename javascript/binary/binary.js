'use strict';

var Binary = function(input) {
  this.input = input;
}

Binary.prototype.toDecimal = function() {
  var inputArray = this.input.split('');

  var decimalValue = 0;

  console.log(`-------- ${this.input} -----------`);
  console.log(`inputArray.length is ${inputArray.length}`)

  for(var i=inputArray.length; i>0; i--) {
    console.log(`+++ i is ${i} +++`);

    var currentBinaryValue = parseInt(inputArray[inputArray.length - i]);
    console.log(`currentBinaryValue is inputArray[inputArray.length - i] -> inputArray[${inputArray.length} - ${i}] -> inputArray[${inputArray.length - i}] -> ${currentBinaryValue}`);

    var binaryPlaceValue = 2**(i-1);
    console.log(`binaryPlaceValue is 2**(i-1) -> 2**(${i}-1) -> 2**(${i-1}) -> ${binaryPlaceValue}`)

    var valueToAdd = currentBinaryValue * binaryPlaceValue;
    console.log(`valueToAdd is currentBinaryValue * binaryPlaceValue -> ${currentBinaryValue} * ${binaryPlaceValue} -> ${valueToAdd}`)

    decimalValue += valueToAdd;
    console.log(`decimalValue is now ${decimalValue}`);
  }

  return decimalValue;
}

module.exports = Binary;