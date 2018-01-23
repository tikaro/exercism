'use strict';

const DEBUG = true;

var Binary = function(input) {
  this.input = input;
}

Binary.prototype.toDecimal = function() {
 if (!/^[01]+$/.test(this.input)) {
   return 0;
 }
  
  var inputArray  = this.input.split('').reverse();
  var outputArray = [];

  DEBUG && console.log(`++++++++++++++++ ${this.input} +++++++++++++++++`)

  for(var i=0; i < inputArray.length; i++) {
    var currentBinaryValue = parseInt(inputArray[i]);
    DEBUG && console.log(`currentBinaryValue is ${currentBinaryValue}`);

    var binaryPlaceValue = 2**(i);
    DEBUG && console.log(`binaryPlaceValue is ${binaryPlaceValue}`);

    outputArray.push(currentBinaryValue * binaryPlaceValue);
    DEBUG && console.log(`pushing ${currentBinaryValue * binaryPlaceValue} to outputArray`);
  }

  var decimalResult = outputArray.reduce(function(previous, current) {
    return previous + current;
  });

  return decimalResult;
}

module.exports = Binary;