'use strict'

var SpaceAge = function(seconds) {
  this.seconds = seconds;
  this.earthYear    = 31557600;
  this.mercuryYear  = this.earthYear * 0.2408467;
  this.venusYear    = this.earthYear * 0.61519726;
  this.marsYear     = this.earthYear * 1.8808158;
  this.jupiterYear  = this.earthYear * 11.862615;
  this.saturnYear   = this.earthYear * 29.447498;
  this.uranusYear   = this.earthYear * 84.016846;
  this.neptuneYear  = this.earthYear * 164.79132;
}

SpaceAge.prototype.onEarth = function() {
  return calcAge(this.seconds, this.earthYear);
}

SpaceAge.prototype.onMercury = function() {
  return calcAge(this.seconds, this.mercuryYear);
}

SpaceAge.prototype.onVenus = function() {
  return calcAge(this.seconds, this.venusYear);
}

SpaceAge.prototype.onMars = function() {
  return calcAge(this.seconds, this.marsYear);
}

SpaceAge.prototype.onJupiter = function() {
  return calcAge(this.seconds, this.jupiterYear);
}

SpaceAge.prototype.onSaturn = function() {
  return calcAge(this.seconds, this.saturnYear);
}

SpaceAge.prototype.onUranus = function() {
  return calcAge(this.seconds, this.uranusYear);
}

SpaceAge.prototype.onNeptune = function() {
  return calcAge(this.seconds, this.neptuneYear);
}

function calcAge(ageInSeconds, secondsInYear) {
  return Math.round((ageInSeconds / secondsInYear) * 100) / 100;
}

module.exports = SpaceAge;