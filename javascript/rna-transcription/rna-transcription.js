'use strict';

var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (nucleotide) {
  // Throw an error if nucleotide contains anything besides
  // 'G','C','T', and 'A'
  if (!/^[GCTA]+$/.test(nucleotide)) {
    throw new Error("Invalid input");
  }

  // Replace UPPERCASE inputs with lowercase outputs
  // to avoid collisions
  nucleotide = nucleotide.replace(/C/g, 'g');
  nucleotide = nucleotide.replace(/G/g, 'c');
  nucleotide = nucleotide.replace(/A/g, 'u');
  nucleotide = nucleotide.replace(/T/g, 'a');

  // UPPERCASE the result and send it back
  nucleotide = nucleotide.toUpperCase();
  return nucleotide;
};

module.exports = DnaTranscriber;