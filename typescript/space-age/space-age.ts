const earthyear = 31557600
export default class SpaceAge {
    seconds: number
    constructor(seconds: number) {
        this.seconds = seconds
    }
    ageOn(orbitalperiod: number): number {

        var planetyearinseconds: number = earthyear * orbitalperiod
        var planetage =  (Math.round((this.seconds / planetyearinseconds) * 100)/100)

        /*
        console.log('-----------------------')
        console.log('earthseconds is ' + earthyear)
        console.log('orbitalperiod is ' + orbitalperiod)
        console.log('planetyearinseconds is ' + planetyearinseconds)
        console.log('planetage is ' + planetage)
        console.log('---------------------------')
        */

        return planetage
    }
    onMercury(): number {
        // Mercury: orbital period 0.2408467 Earth years
        var mercury: number = 0.2408467
        return this.ageOn(mercury)
    }
    onVenus(): number {
        // Venus: orbital period 0.61519726 Earth years
        var venus: number = 0.61519726
        return this.ageOn(venus)
    }
    onEarth(): number {
        var earth: number = 1.0000000
        return this.ageOn(earth)
    }
    onMars(): number {
        // Mars: orbital period 1.8808158 Earth years
        var mars: number = 1.8808158
        return this.ageOn(mars)
    }
    onJupiter(): number {
        // Jupiter: orbital period 11.862615 Earth years
        var jupiter: number = 11.8626158
        return this.ageOn(jupiter)
    }
    onSaturn(): number {
        // Saturn: orbital period 29.447498 Earth years
        var saturn: number = 29.447498
        return this.ageOn(saturn)
    }
    onUranus(): number {
        // Uranus: orbital period 84.016846 Earth years
        var uranus: number = 84.016846
        return this.ageOn(uranus)
    }
    onNeptune(): number {
        // Neptune: orbital period 164.79132 Earth years
        var neptune: number = 164.79132
        return this.ageOn(neptune)
    }
}
