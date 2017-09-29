'use strict'

var Pangram = function(input) {
  this.input = input.toLowerCase();
}

Pangram.prototype.isPangram = function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for( var i = 0; i <= alphabet.length; i++ ) {
    if( !this.input.match( alphabet[i] ) ) {
      return false;
    }
  }
  return true;
}

module.exports = Pangram;