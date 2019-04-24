export const isPangram = (input = '') => {
  const theAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const sentence = input.toLowerCase()

  for( var i = 0; i <= theAlphabet.length; i++ ) {
    if( !sentence.match( theAlphabet[i] ) ) {
      return false;
    }
  }
  return true;
}