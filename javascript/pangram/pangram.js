'use strict'

var Pangram = function(input) {
  this.input = input;
}

Pangram.prototype.isPangram = function() {
  if( this.input.length == 0 ) { return false; }

  return true;
}

module.exports = Pangram;