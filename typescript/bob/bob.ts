export default class Bob {


  hey(phrase: string): string {

    // Respond to ALL CAPS
    if (phrase == phrase.toUpperCase()) {
      return "Whoa, chill out!"
    }

    // Respond to a question
    if (phrase[phrase.length - 1] == '?') {
      return 'Sure.'
    }

    // Respond to a forceful statement
    if (phrase[phrase.length - 1] == '!') {
      return 'Whatever.'
    }

    // Everything else
    return 'Whatever.'
  }
}