'use strict';

var Pangram = function(phrase) {
  this.phrase = phrase.toLowerCase();
}

Pangram.prototype.isPangram = function() {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

  for( var i=0; i < alphabet.length; i++ ) {
    if( !this.phrase.match(alphabet[i]) ) {
      return false;
    }
  }
  return true;
}

module.exports = Pangram;