using System;
using System.Text.RegularExpressions;

public static class Bob
{
    public static string Hey(string statement)
    {
        // Get rid of leading and trailing whitespace
        statement = statement.Trim();

        // The default case is to reply "Whatever."
        string reply = "Whatever.";
        if (IsEmpty(statement)) {
            reply = "Fine. Be that way!";
        } else if (IsShouting(statement)) {
            reply = "Whoa, chill out!";
        } else if (IsQuestion(statement)) {
            reply = "Sure.";
        }
        return reply;
    }

    // Returns true if statement has zero length
    private static bool IsEmpty (string statement) {
        return (statement == "");
    }

    // Returns true iff the statement has at least one uppercase letter and has zero lowercase letters.
    private static bool IsShouting (string statement) {
        return (Regex.IsMatch(statement,"[A-Z]") && !Regex.IsMatch(statement,"[a-z]"));
    }

    // Returns true iff the statement ends in a question mark
    private static bool IsQuestion (string statement) {
        return (statement.Substring(statement.Length - 1) == "?");
    }
}