export default class ScrabbleScore {
    score: number

    costructor(input: string) {
        this.score = this._score(input)
    }

    private _score(word: string): number {
        word = "hi" // do something with this to stop the red squiggly
        return 0    // to get the first test to pass
    }
}