export default class Beer {
  private static pluralize(input: number): string {
    if (input === 0) {return "o more bottles "}
    return (input === 1) ? "1 bottle " : `${input} bottles `
  }

  static verse(input: number): string {
    const wall: string = "of beer on the wall"
    if (input === 0) {
      return `N${Beer.pluralize(0)}${wall}, n${Beer.pluralize(0)}of beer.
Go to the store and buy some more, ${Beer.pluralize(99)}${wall}.
`
    }
    if (input === 1) {
      return `${Beer.pluralize(1)}${wall}, ${Beer.pluralize(input)}of beer.
Take it down and pass it around, n${Beer.pluralize(0)}${wall}.
`
    }
    return `${Beer.pluralize(input)}${wall}, ${Beer.pluralize(input)}of beer.
Take one down and pass it around, ${Beer.pluralize(input - 1)}${wall}.
`
  }

  static sing(start: number = 99, end: number = 0): string {
    let temp = ``
    for (let i: number = start; i >= end ; i -= 1) {
        temp += Beer.verse(i)
        if (i !== end ) {
            temp += "\n"
        }
    }
    return temp
  }
}