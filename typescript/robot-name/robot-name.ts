class RobotName {
  name: string

  constructor() {
    this.name = this.generateName()
  }

  resetName() {
    this.name = this.generateName()
  }

  private generateName() {
    let prefix = "RB"

    let d = new Date
    let m = d.getMilliseconds().toString()
    let suffix = m.substring(m.length, -3)

    return prefix + suffix
  }
}

export default RobotName