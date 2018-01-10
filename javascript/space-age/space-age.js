'use strict'

var SpaceAge = function(seconds) {
  this.seconds = seconds;
  this.earthYear = 31557600;
  this.mercuryYear = this.earthYear * 0.2408467;
}

SpaceAge.prototype.onEarth = function() {
  return Math.round((this.seconds / 31557600) * 100) / 100;
}

SpaceAge.prototype.onMercury = function() {
  return Math.round((this.seconds / this.mercuryYear) * 100) / 100;
}

module.exports = SpaceAge;

/*

   - Earth: orbital period 365.25 Earth days, or 31557600 seconds
   - Mercury: orbital period 0.2408467 Earth years
   - Venus: orbital period 0.61519726 Earth years
   - Mars: orbital period 1.8808158 Earth years
   - Jupiter: orbital period 11.862615 Earth years
   - Saturn: orbital period 29.447498 Earth years
   - Uranus: orbital period 84.016846 Earth years
   - Neptune: orbital period 164.79132 Earth years

*/