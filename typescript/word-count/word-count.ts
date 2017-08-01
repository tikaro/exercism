export default class Words {
  count(input: string): Map<string, number> {
    const inputArray = input
                        .replace(/\n/, " ")
                        .replace(/\t/, " ")
                        .toLowerCase()
                        .split(" ")

    const inputMap = new Map<string, number>()

    for (const each of inputArray) {
      if (each === "") {continue}
      const value = inputMap.get(each) || 0
      inputMap.set(each.trim(), value + 1)
    }
    return inputMap
  }
}