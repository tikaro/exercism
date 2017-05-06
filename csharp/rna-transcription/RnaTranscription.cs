using System;
using System.Collections.Generic;

public static class Complement
{
    public static string OfDna(string nucleotide)
    {
        Dictionary<char, char> dnaToRnaTranscription = new Dictionary<char, char>
        {
            { 'C', 'G' },
            { 'G', 'C' },
            { 'T', 'A' },
            { 'A', 'U' }
        };

        string rnastrand = "";
        foreach (char letter in nucleotide) {
            rnastrand += dnaToRnaTranscription[letter].ToString();
        }
        return rnastrand;
    }
}