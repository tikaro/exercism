  /* 
  I 'solved' this exercise by cribbing from the example:
  https://github.com/exercism/typescript/blob/master/exercises/pangram/pangram.example.ts
  */

// Hoo boy, this thing is magic to me.
const aToZ =  [...Array<string>(26)].map( ( _ , index) => {
    return String.fromCharCode(index + 65)
 })

class Pangram {
    inputString: string
    constructor(inputString: string = "") {
        this.inputString = inputString.toLowerCase()
    }
    isPangram(): boolean {
        // create dictionary myMap and fill it with the alphabet
        const myMap = new Map<string, number>()
        aToZ.forEach((key: string) => {
            myMap.set(key.toLowerCase(), 0)
        })

        // look up each character in the inputString
        // and increment the corresponding value in myMap
        for (const each of this.inputString) {
            const value = myMap.get(each) || 0
            myMap.set(each, value + 1 )
        }

        // Is there anything in myMap not incremented? 
        // Then it's not a pangram.
        for (const each of myMap.values()) {
            if (each === 0 ) {
                return false
            }
        }
        return true
    }
}
export default Pangram