export default function calculatePrimeFactors (input: number): number[] {
  const factors = []
  let currentFactor = 2
  while (input !== 1) {
    if ( input % currentFactor === 0 ) {
      factors.push(currentFactor)
      input /= currentFactor
      currentFactor = 2
    } else {
      currentFactor ++
    }
  }
  return factors
}