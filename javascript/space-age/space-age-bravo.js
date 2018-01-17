'use strict';

var SpaceAge = function(seconds) {
  this.seconds = seconds;
  this.earthYearInSeconds   = 31557600;
  this.mercuryYearInSeconds = this.earthYearInSeconds * 0.2408467;
  this.venusYearInSeconds   = this.earthYearInSeconds * 0.61519726;
  this.marsYearInSeconds    = this.earthYearInSeconds * 1.8808158;
  this.jupiterYearInSeconds = this.earthYearInSeconds * 11.862615;
  this.saturnYearInSeconds  = this.earthYearInSeconds * 29.447498;
  this.uranusYearInSeconds  = this.earthYearInSeconds * 84.016846;
  this.neptuneYearInSeconds = this.earthYearInSeconds * 164.79132;
}

SpaceAge.prototype.onEarth = function() {
  return calcAge(this.seconds, this.earthYearInSeconds);
}

SpaceAge.prototype.onMercury = function() {
  return calcAge(this.seconds, this.mercuryYearInSeconds);
}

SpaceAge.prototype.onVenus = function() {
  return calcAge(this.seconds, this.venusYearInSeconds);
}

SpaceAge.prototype.onMars = function() {
  return calcAge(this.seconds, this.marsYearInSeconds);
}

SpaceAge.prototype.onJupiter = function() {
  return calcAge(this.seconds, this.jupiterYearInSeconds);
}

SpaceAge.prototype.onSaturn = function() {
  return calcAge(this.seconds, this.saturnYearInSeconds);
}

SpaceAge.prototype.onUranus = function() {
  return calcAge(this.seconds, this.uranusYearInSeconds);
}

SpaceAge.prototype.onNeptune = function() {
  return calcAge(this.seconds, this.neptuneYearInSeconds);
}

var calcAge = function(ageInSeconds, yearLengthInSeconds) {
  return Math.round((ageInSeconds / yearLengthInSeconds) * 100) / 100;
}

module.exports = SpaceAge;