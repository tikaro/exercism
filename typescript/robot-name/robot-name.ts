class RobotName {
  private _name: string

  constructor() {
    this._name = this.generateName()
  }

  name() {
    return this._name
  }

  resetName() {
    this._name = this.generateName()
  }

  private generateName() {
    return "AB123"
  }
}

export default RobotName