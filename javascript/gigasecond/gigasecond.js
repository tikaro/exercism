var Gigasecond = function(dateOfBirth) {
  this.dateOfBirth = dateOfBirth;
};
  
Gigasecond.prototype.date = function() {
  var timeOfBirth = this.dateOfBirth.getTime();
  var anniversaryDate = new Date(timeOfBirth + 1000000000000);
  return anniversaryDate;
};

module.exports = Gigasecond;