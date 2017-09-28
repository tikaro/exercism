'use strict'

var Cipher = function(input = 'aaaaaaaaaa') {
  if (input.length == 0) { throw new Error('Bad key');}
  if (/^[A-Z|1-9]+$/.test(input)) { throw new Error('Bad key');}

  this.key = input;
};

Cipher.prototype.encode = function(input) {
  var plaintext = input;
  var ciphertext = '';
  for(var i=0; i< input.length; i++) {
    ciphertext += this.encryptChar(input[i],this.key[i % (this.key.length)]);
  }

  return ciphertext;
}

Cipher.prototype.decode = function(input) {
  var ciphertext = input;
  var plaintext = '';
  for(var i=0; i< input.length; i++) {
    plaintext += this.decryptChar(input[i],this.key[i % (this.key.length)]);
  }
  return plaintext;
}

Cipher.prototype.encryptChar = function(inputChar, keyChar) {
  var inputCharCode = inputChar[0].charCodeAt(0) - 97;
  var keyCode = keyChar.charCodeAt(0) - 97;
  var shiftChar = inputCharCode + keyCode;

  // handle characters greater than 'z'
  if (shiftChar > 25) ( shiftChar = shiftChar - 26);

  var outputChar = String.fromCharCode(97 + shiftChar);

  return outputChar;
}

Cipher.prototype.decryptChar = function(inputChar, keyChar) {
  var inputCharCode = inputChar[0].charCodeAt(0) - 97;
  var keyCode = keyChar.charCodeAt(0) - 97;
  var shiftChar = inputCharCode - keyCode;

  // handle characters less than 'a'
  if (shiftChar < 0) ( shiftChar = shiftChar + 26);

  var outputChar = String.fromCharCode(97 + shiftChar);

  return outputChar;
}

module.exports = Cipher;