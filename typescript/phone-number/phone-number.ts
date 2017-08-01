export default class PhoneNumber {
  inputNumber: string
  constructor (input: string) {
    this.inputNumber = input
  }

  number(): string | undefined {
    console.log('this.cleanNumber.value.length is ' + this.cleanNumber.value
    return this.cleanNumber()
  }
  
  cleanNumber(): string {
    return this.inputNumber
                 .replace(/[\(\)]/g, "") // remove parentheses
                 .replace (/-/g, "")     // remove dashes
                 .replace(/ /g, "")      // remove spaces
                 .replace(/\./g, "")     // remove dots
  }
}