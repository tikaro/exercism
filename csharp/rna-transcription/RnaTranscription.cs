using System;

public static class Complement
{
    public static string OfDna(string nucleotide)
    {
        // DNA CYTOSINE to RNA guanine
        nucleotide = nucleotide.Replace('C', 'g');

        // DNA GUANINE to RNA cytosine;
        nucleotide = nucleotide.Replace('G', 'c');

        // DNA THYMINE to RNA adenine;
        nucleotide = nucleotide.Replace('T', 'a');

        // DNA ADENINE to RNA uracil;
        nucleotide = nucleotide.Replace('A', 'u');

        return nucleotide.ToUpper();
    }
}