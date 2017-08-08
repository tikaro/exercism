class Phone {
  private value: string

  constructor(input: string) {
    let cleanedInput = input.replace(/[()-.]/g, '')
    cleanedInput = cleanedInput.replace(/\s/g, '')

    if (cleanedInput.length === 11 && cleanedInput.substr(0,1) === '1') {
      cleanedInput = cleanedInput.substr(1,10)
    }

    this.value = cleanedInput
  }

  number() {
    if (this.value.length !== 10) {
      return undefined
    }

    for (const char of this.value) {
      const result = parseInt(char, 10)
      if (isNaN(result)) {return undefined}
    }

    return this.value
  }
}

export default Phone