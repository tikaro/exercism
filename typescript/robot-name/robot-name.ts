class RobotName {
  private _name: string
  private usedNames = new Set<string>()

  get name () {
    return this._name
  }

  constructor() {
    this.resetName()
  }

  resetName() {
    this._name = this.generateName()
    while (this.usedNames.has(this._name)) {
      this._name = this.generateName()
    }
    this.usedNames.add(this._name)
  }

  private generateName() {
    const prefix: string = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase()
    let suffix: string = Math.round(Math.random() * 1000).toString(10)
    suffix = "000".substring(0, 3 - suffix.length) + suffix // convert '7' to '007'
    const generatedName = prefix + suffix
    // console.log('generatedName is ' + generatedName)
    return generatedName
  }
}

export default RobotName