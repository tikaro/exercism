using System;
using System.Linq;

public static class Pangram
{
    public static bool IsPangram(string input)
    {
        for (char c = 'A'; c <= 'Z'; c++)
        {
            if (!input.ToUpper().Contains(c)) { return false; }
        }
        return true;
    }
}
