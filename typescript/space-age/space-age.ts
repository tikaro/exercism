const earthyear = 31557600
export default class SpaceAge {
    seconds: number
    constructor(seconds: number) {
        this.seconds = seconds
    }
    planetAge(ageinseconds: number, yearinseconds: number): number {
        return (Math.round((ageinseconds / yearinseconds) * 100)/100)
    }
    onMercury(): number {
        // Mercury: orbital period 0.2408467 Earth years
        var mercuryyear: number = (earthyear * 0.2408467)
        return this.planetAge(this.seconds, mercuryyear)
    }
    onVenus(): number {
        // Venus: orbital period 0.61519726 Earth years
        var venusyear: number = (earthyear * 0.61519726)
        return this.planetAge(this.seconds, venusyear)
    }
    onEarth(): number {
        return this.planetAge(this.seconds, earthyear)
    }
    onMars(): number {
        // Mars: orbital period 1.8808158 Earth years
        var marsyear: number = (earthyear * 1.8808158)
        return this.planetAge(this.seconds, marsyear)
    }
    onJupiter(): number {
        // Jupiter: orbital period 11.862615 Earth years
        var jupiteryear: number = (earthyear * 11.8626158)
        return this.planetAge(this.seconds, jupiteryear)
    }
    onSaturn(): number {
        // Saturn: orbital period 29.447498 Earth years
        var saturnyear: number = (earthyear * 29.447498)
        return this.planetAge(this.seconds, saturnyear)
    }
    onUranus(): number {
        // Uranus: orbital period 84.016846 Earth years
        var uranusyear: number = (earthyear * 84.016846)
        return this.planetAge(this.seconds, uranusyear)
    }
    onNeptune(): number {
        // Neptune: orbital period 164.79132 Earth years
        var neptuneyear: number = (earthyear * 164.79132)
        return this.planetAge(this.seconds, neptuneyear)
    }
}
