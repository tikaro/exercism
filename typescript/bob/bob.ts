export default class Bob {
  hey(phrase: string): string {

    // Silence
    if (phrase.trim().length === 0) { return 'Fine. Be that way!' }

    //All caps
    if ( !(phrase.toLowerCase() === phrase) &&
          (phrase.toUpperCase() === phrase)) {
            return "Whoa, chill out!"
    }

    if (phrase.endsWith('?')) { return 'Sure.' } // Question
    if (phrase.endsWith('!')) { return 'Whatever.' } // Shouting
    return 'Whatever.' // everything else
  }
}