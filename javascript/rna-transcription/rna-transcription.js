export function toRna (nucleotide) {
  // Replace UPPERCASE inputs with lowercase outputs
  // to avoid collisions
  nucleotide = nucleotide.replace(/C/g, 'g');
  nucleotide = nucleotide.replace(/G/g, 'c');
  nucleotide = nucleotide.replace(/A/g, 'u');
  nucleotide = nucleotide.replace(/T/g, 'a');

  // UPPERCASE the result and send it back
  nucleotide = nucleotide.toUpperCase();
  return nucleotide;
}