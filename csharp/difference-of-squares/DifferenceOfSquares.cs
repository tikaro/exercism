using System;
using System.Linq;

public static class Squares
{
    public static int SquareOfSums(int max)
    {
        int sum = Enumerable.Range(1, max).Sum();

        return sum * sum;
    }

    public static int SumOfSquares(int max)
    {
        int sum = Enumerable.Range(1, max).Sum(n => n * n);

        return sum;
    }

    public static int DifferenceOfSquares(int max)
    {
        return SquareOfSums(max) - SumOfSquares(max);
    }
}