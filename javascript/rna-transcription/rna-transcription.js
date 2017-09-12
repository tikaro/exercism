'use strict';

var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (nucleotide) {
  nucleotide = nucleotide.replace(/C/g, 'g');
  nucleotide = nucleotide.replace(/G/g, 'c');
  nucleotide = nucleotide.replace(/A/g, 'u');
  nucleotide = nucleotide.replace(/T/g, 'a');
  nucleotide = nucleotide.toUpperCase();
  return nucleotide;
};

module.exports = DnaTranscriber;