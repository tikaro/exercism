class Prime {
    nth(input: number): number {
        if (input < 1) {
            throw new Error('Prime is not possible')
        }

        const primeArray = this.generatePrimeArray(input)

        const arrayPosition: number = input - 1

        return primeArray[arrayPosition]
    }

    generatePrimeArray(count: number): number[] {
        const primeArray: number[] = []

        for ( let i: number = 1; primeArray.length < count; i++) {
            if (this.isPrime(i)) {
                primeArray.push(i)
            }
        }
        return primeArray
    }

    isPrime(input: number): boolean {
        if (input < 2) { return false } // 0 and 1 are not prime
        for (let i: number = 2; i <= (input / 2); i++ ) {
            if (input % i === 0) {
                return false
            }
        }
        return true
    }
}

export default Prime