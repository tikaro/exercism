const gigamillisecond = 1000000000 * 1000
export default class Gigasecond {
    currentDate: Date
    constructor(date: Date) {
        this.currentDate = date
    }
    date(): Date {
        return new Date(this.currentDate.valueOf() + gigamillisecond)
    }
}

//NB: I leaned heavily on the example exercise for this.