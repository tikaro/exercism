'use strict';

var SpaceAge = function(seconds) {
  this.seconds = seconds;
  return this.seconds;
}

SpaceAge.prototype.onEarth = function() {
  var earthYearInSeconds = 31557600;
  var ageOnEarth = calcAge(this.seconds, earthYearInSeconds);
  return ageOnEarth;
}

var calcAge = function(ageInSeconds, yearLengthInSeconds) {
  return Math.round((ageInSeconds / yearLengthInSeconds) * 100) / 100;
}

module.exports = SpaceAge;