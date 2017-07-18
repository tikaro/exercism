export default class Squares {
    squareOfSums: number
    sumOfSquares: number
    difference: number

    upto: number = 0

    constructor(input: number) {
        this.squareOfSums = this._squareOfSums(input)
        this.sumOfSquares = this._sumOfSquares(input)
        this.difference = this._difference()
    }

    private _squareOfSums(upto: number): number {
        // the numbers are consecutive starting from 1,
        // so I can do this without a loop.
        var sum: number = (upto * ( upto +1 ))/2
        var squareofsums: number = sum * sum //could also be sum ** 2
        return squareofsums
    }

    private _sumOfSquares(upto: number): number {
        var sumofsquares: number = 0
        for (var index = 1; index <= upto; index++) {
            sumofsquares += (index * index) //could also be index ** 2
        }
        return sumofsquares
    }

    private _difference(): number {
        return this.squareOfSums - this.sumOfSquares
    }
}