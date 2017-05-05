using System;

public static class Leap
{
    public static bool IsLeapYear(int year)
    {
        // Any year divisible by 400 is a leap year.
        if (HasNoRemainder(year, 400)) {
            return true;
        }

        // 2100 is divisible by 100, but not by 400.
        // 2100 is not a leap year.
        if (HasNoRemainder(year, 100) &&
        !HasNoRemainder(year, 400))
        {
            return false;
        }

        // With those cases handled,
        // anything divisible by four is a leap year.
        if (HasNoRemainder(year, 4))
        {
            return true;
        }
        return false;
    }

    public static bool HasNoRemainder(int dividend, int divisor)
    {
        return (dividend % divisor == 0);
    }
}