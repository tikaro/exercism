'use strict'

var Bob = function() {
}

Bob.prototype.hey = function(input) {
  input = input.replace(/[\s]+$/g, '');

  var response = "Whatever.";
  if(this.isAsking(input)) { response = "Sure."; }
  if(this.isShouting(input)) { response = "Whoa, chill out!"; }
  if(this.isSilence(input)) { response = "Fine. Be that way!"; }
  return response;
}

Bob.prototype.isAsking = function(input) {
  return input[input.length - 1] === '?';
}

Bob.prototype.isShouting = function(input) {
  return /[A-Z]/.test(input) && input.toUpperCase() === input;
}

Bob.prototype.isSilence = function(input) {
  return input.length === 0;
}

module.exports = Bob;