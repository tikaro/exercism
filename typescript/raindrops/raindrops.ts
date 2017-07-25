export default class Raindrops {
  convert(input: number): string {
    let response: string = ""

    if (input % 3 === 0) { response += "Pling" }
    if (input % 5 === 0) { response += "Plang" }
    if (input % 7 === 0) { response += "Plong" }
    if (response.length === 0) { response = input.toString() }

    return response
  }
}