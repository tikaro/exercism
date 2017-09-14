'use strict'

var Cipher = function(input = 'aaaaaaaaaa') {
  this.key = input;

  if (/^[A-Z|1-9]+$/.test(this.key)) { throw new Error('Bad key');}
};

Cipher.prototype.encode = function(input) {
  var plaintext = input;
  var ciphertext = this.shift(plaintext);
  return ciphertext;
}

Cipher.prototype.decode = function(input) {
  var ciphertext = input;
  var plaintext = this.shift(ciphertext);
  return plaintext;
}

Cipher.prototype.shift = function(input) {
  var inputstring = input;
  var outputstring = inputstring;
  return outputstring;
}
module.exports = Cipher;