using System;
using System.Linq;

public static class Hamming
{
    public static int Compute(string firstStrand, string secondStrand)
    {
        return firstStrand.Zip(secondStrand, (c1, c2) => c1 != c2 ? 1 : 0).Sum();
    }
}