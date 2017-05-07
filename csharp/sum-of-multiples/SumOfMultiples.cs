using System;
using System.Linq;
using System.Collections.Generic;

public static class SumOfMultiples
{
    public static int To(IEnumerable<int> multiples, int max)
    {
        return Enumerable.Range(1, max - 1)
                         .Where(n => multiples.Any(multiple => n % multiple == 0))
                         .Sum();
    }
}