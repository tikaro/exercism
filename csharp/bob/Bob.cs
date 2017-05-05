using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Hey(string statement)
    {
        statement = statement.Trim();

        if ( statement == "" )
        {
            return "Fine. Be that way!";
        } else if (Regex.IsMatch(statement,"[A-Z]") &&
            !Regex.IsMatch(statement,"[a-z]")) {
            return "Whoa, chill out!";
        } else if ( statement.Substring(statement.Length - 1) == "?" ) {
            return "Sure.";
        } else {
            return "Whatever.";
        }
    }
}