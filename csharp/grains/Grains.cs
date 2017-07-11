using System;
using System.Diagnostics;

public static class Grains
{
    public static ulong Square(int n)
    {
        // For a square numbered n,
        // return 2 to the (n-1)th power:
        // 2^0 is 1
        // 2^1 is 2
        // 2^2 is 4 etc.
        return Convert.ToUInt64(Math.Pow(2, n-1));
    }

    public static ulong Total()
    {
        ulong totalGrains = 0;
        ulong finalSquare = Convert.ToUInt64(Math.Pow(2, 63));
        totalGrains = finalSquare + (finalSquare - 1);
        return totalGrains;
    }
}