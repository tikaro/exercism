const earthyearinseconds = 31557600
export default class SpaceAge {

    seconds: number = 0

    constructor(input: number) {
        this.seconds = input
    }
    
    private calcAge(orbitalperiod: number): number {
        var planetyearinseconds: number = earthyearinseconds * orbitalperiod
        var ageonplanet =  (Math.round((this.seconds / planetyearinseconds) * 100)/100)
        return ageonplanet
    }

    onMercury(): number { return this.calcAge(0.2408467) }
    onVenus():   number { return this.calcAge(0.61519726) }
    onEarth():   number { return this.calcAge(1.0000000) }
    onMars():    number { return this.calcAge(1.8808158) }
    onJupiter(): number { return this.calcAge(11.862615) }
    onSaturn():  number { return this.calcAge(29.447498) }
    onNeptune(): number { return this.calcAge(164.79132) }
    onUranus():  number { return this.calcAge(84.016846) }
}
