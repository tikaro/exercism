public static class Bob
{
    public static string Response(string statement)
    {
        if (IsSilence(statement))
        {
            return "Fine. Be that way!";
        }

        if (IsAsking(statement) && IsShouting(statement))
        {
            return "Calm down, I know what I'm doing!";
        }

        if (IsAsking(statement))
        {
            return "Sure.";
        }

        if (IsShouting(statement))
        {
            return "Whoa, chill out!";
        }

        return "Whatever.";
    }

    private static bool IsShouting(string statement) => statement.Any(char.IsLetter) && !statement.Any(char.IsLower);
    private static bool IsAsking(string statement) => statement.Trim().EndsWith("?");
    private static bool IsSilence(string statement) => string.IsNullOrWhiteSpace(statement);
}