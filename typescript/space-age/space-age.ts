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
const earthyearinseconds = 31557600
export default class SpaceAge {
    seconds: number
    constructor(seconds: number) {
        this.seconds = seconds
    }
    roundedAge(ageinseconds: number): number {
        return Math.round(ageinseconds * 100)/100
    }
    planetAge(ageinseconds: number, yearinseconds: number) {
        return ageinseconds / yearinseconds
    }
    onMercury(): number {
        // Mercury: orbital period 0.2408467 Earth years
        var mercuryyearinseconds: number = (earthyearinseconds * 0.2408467)
        var mercuryage: number = this.planetAge(this.seconds, mercuryyearinseconds)
        return this.roundedAge(mercuryage)
    }
    onVenus(): number {
        // Venus: orbital period 0.61519726 Earth years
        var venusyearinseconds: number = (earthyearinseconds * 0.61519726)
        var venusage: number = this.planetAge(this.seconds, venusyearinseconds)
        return this.roundedAge(venusage)
    }
    onEarth(): number {
        var earthage: number = this.planetAge(this.seconds, earthyearinseconds)
        return this.roundedAge(earthage)
    }
    onMars(): number {
        return 0
    }
    onJupiter(): number {
        return 0
    }
    onSaturn(): number {
        return 0
    }
    onUranus(): number {
        return 0
    }
    onNeptune(): number {
        return 0
    }
}
