export const isPangram = (input = '') => {
  const ALPHABET = [...'abcdefghijklmnopqrstuvwxyz']
  const sentence = input.toLowerCase()

  return ALPHABET.every((letter) => sentence.includes(letter))
}