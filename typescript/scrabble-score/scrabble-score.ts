export default function score(input: string = ''): number {
    var word: string = input
    var score: number = 0

    const scrabbleMap = new Map<string, number>()

    // fill the dictionary with tiles and their corresponding scores
    function addtiles(tiles: string, score: number) {
        tiles.split('').forEach((key: string) => {
            scrabbleMap.set(key.toLowerCase(), score)
        })
    }

    addtiles('aeioulnrst', 1)
    addtiles('dg', 2)
    addtiles('bcmp', 3)
    addtiles('fhvwy', 4)
    addtiles('k', 5)
    addtiles('jx', 8)
    addtiles('qz', 10)

    // look up each tile in the dictionary and add it to the score
    for (const each of word) {
        const value = scrabbleMap.get(each.toLowerCase()) || 0
        score += value
    }

    return score
}