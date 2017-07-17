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
        var sum: number = (upto * ( upto +1 ))/2
        var squareofsums: number = sum*sum
        return squareofsums
    }

    private _sumOfSquares(upto: number): number {
        var sumofsquares: number = 0
        for (var index = 1; index <= upto; index++) {
            sumofsquares += (index * index)
        }
        return sumofsquares
    }

    private _difference(): number {
        return this.squareOfSums - this.sumOfSquares
    }
}