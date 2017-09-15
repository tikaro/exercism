'use strict'

var Cipher = function(input = 'aaaaaaaaaa') {
  if (/^[A-Z|1-9]+$/.test(input)) { throw new Error('Bad key');}
  this.key = input;
};

Cipher.prototype.encode = function(input) {
  var plaintext = input;
  var ciphertext = '';
  for(var i=0; i< input.length; i++) {
    ciphertext += this.encryptChar(input[i],this.key[i]);
  }
  /*
  console.log('plaintext: ' + plaintext);
  console.log('key: ' + this.key);
  console.log('ciphertext: ' + ciphertext);
  console.log('-----------------------------');
  */
  return ciphertext;
}

Cipher.prototype.decode = function(input) {
  var ciphertext = input;
  var plaintext = '';
  for(var i=0; i< input.length; i++) {
    plaintext += this.decryptChar(input[i],this.key[i]);
  }
  return plaintext;
}

Cipher.prototype.encryptChar = function(inputChar, keyChar) {
  var inputCharCode = inputChar[0].charCodeAt(0) - 97;
  var keyCode = keyChar.charCodeAt(0) - 97;

  var shiftChar = inputCharCode + keyCode;
  //console.log("shiftChar is " + shiftChar);
  var outputChar = String.fromCharCode(97 + shiftChar);

  return outputChar;
}

Cipher.prototype.decryptChar = function(inputChar, keyChar) {
  var inputCharCode = inputChar[0].charCodeAt(0) - 97;
  var keyCode = keyChar.charCodeAt(0) - 97;

  var shiftChar = inputCharCode - keyCode;
  console.log("shiftChar is " + shiftChar);
  var outputChar = String.fromCharCode(97 + shiftChar);

  return outputChar;
}

module.exports = Cipher;