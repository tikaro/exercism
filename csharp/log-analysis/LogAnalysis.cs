public static class LogAnalysis
{
    public static string SubstringAfter(this string input, string delimiter)
    {
        input.Substring(input.IndexOf(delimiter) + delimiter.Length);
    } 

    public static string SubstringBetween(this string input, string startDelimiter, string endDelimiter)
    {
        int startIndex = input.IndexOf(startDelimiter);
        startIndex += startDelimiter.Length;

        int endIndex = input.IndexOf(endDelimiter, startIndex);

        return input.Substring(startIndex, endIndex - startIndex);
    }

    public static string Message(this string log) => log.SubstringAfter("]: ");

    public static string LogLevel(this string log) => log.SubstringBetween("[", "]:");
}