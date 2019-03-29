const rnaMap = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

export const toRna = function(dna){
  return dna.replace(/[GCTA]/g, l => {
    return rnaMap[l];
  });
};