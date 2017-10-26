class SumOfMultiples {
    private numbers: number[]

    constructor(numbers: number[]) {
        this.numbers = numbers
    }

    to(limit: number): number {
        return limit // this functionality is stubbed
    }
}

export default(numbers: number[]) => new SumOfMultiples(numbers)