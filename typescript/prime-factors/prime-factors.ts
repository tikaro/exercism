export default function calculatePrimeFactors(input: number) {
  let factorArray: any[] = []

  //First pass through. Iterate from 2 up, recording factors.
  for( let i:number = 2; i <= input; i++) {
    if (isPrime(i) && input % i === 0) { 
      factorArray.push(i) // add the first factor to the result
      if(i < input) { factorArray.push(input / i) } // add the second factor to the result if it is less than the input
    }
  }
  
  console.log( `input is ${input}. factorArray is ${factorArray}` )
  return factorArray
}

function isPrime(input: number) {
  for( let i:number = 2; i < input; i++) {
    if( input % i === 0) { return false }
  }
  return true
}