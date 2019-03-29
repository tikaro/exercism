export const toRna = (nucleotide) => {

  const nucleotideMap = {
    'C': 'G',
    'G': 'C',
    'T': 'A',
    'A': 'U'
  }

  return nucleotide.split('')
    .map(nucleotide => nucleotideMap[nucleotide])
    .join('')
}