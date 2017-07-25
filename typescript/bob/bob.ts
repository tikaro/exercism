export default class Bob {
  hey(phrase: string): string {

    // Respond to silence
    if (phrase.trim().length === 0 ) {
      return 'Fine. Be that way!'
    }

    // Respond to ALL CAPS
    if ( !(phrase.toLowerCase() === phrase) &&
          (phrase.toUpperCase() === phrase)) {
            return "Whoa, chill out!"
    }

    // Respond to a question
    if (phrase[phrase.length - 1] === '?') {
      return 'Sure.'
    }

    // Respond to a forceful statement
    if (phrase[phrase.length - 1] === '!') {
      return 'Whatever.'
    }

    // Everything else
    return 'Whatever.'
  }
}