var Bob = function() {};

Bob.prototype.hey = function(statement) {
  statement = statement.replace(/[\s]+$/g, '');

  if (this.isShouting(statement)) {
    return "Whoa, chill out!";
  }
  if (this.isAsking(statement)) {
    return "Sure.";
  }
  if (this.isSilence(statement)) {
    return "Fine. Be that way!";
  }
  return "Whatever."
}

Bob.prototype.isShouting = function(statement) {
  return /[A-Z]/.test(statement) && statement.toUpperCase() === statement;
}

Bob.prototype.isAsking = function(statement) {
  return /\?$/.test(statement)
}

Bob.prototype.isSilence = function(statement) {
  return statement.length === 0;
}
module.exports = Bob;