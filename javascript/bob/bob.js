export const hey = (utterance) => {
  utterance = utterance.replace(/[\s]+$/g, '')

  if (isYelling(utterance) && isAsking(utterance)) { return 'Calm down, I know what I\'m doing!'}
  if (isYelling(utterance)) { return 'Whoa, chill out!' }
  if (isAsking(utterance)) { return 'Sure.'}
  if (isSilence(utterance)) { return 'Fine. Be that way!' }
  return 'Whatever.'
}

const isSilence = (statement) => statement.length == 0
const isYelling = (statement) => /[A-Z]/.test(statement) && statement.toUpperCase() == statement
const isAsking = (statement) => /\?$/.test(statement)