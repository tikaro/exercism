export default function score(input: string = ''): number {
    var word: string = input
    var score: number = 0
    
    // create dictionary myMap and fill it with the alphabet
    const scrabbleMap = new Map<string, number>()

    'aeioulnrst'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 1)
    })

    'dg'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 2)
    })

    'bcmp'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 3)
    })

    'fhvwy'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 4)
    })

    'k'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 5)
    })

    'jx'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 8)
    })

    'qz'.split('').forEach((key: string) => {
        scrabbleMap.set(key.toLowerCase(), 10)
    })

    for (const each of word) {
        const value = scrabbleMap.get(each.toLowerCase()) || 0
        score += value
    }

    return score
}