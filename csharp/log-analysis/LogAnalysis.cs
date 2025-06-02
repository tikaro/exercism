public static class LogAnalysis
{
    public static string SubstringAfter(this string input, string delimiter) => input.Split(delimiter)[1];
    public static string SubstringBetween(this string input, string startDelimiter, string endDelimiter) => input.Split(startDelimiter)[1].Split(endDelimiter)[0];
    public static string Message(this string log) => log.SubstringAfter("]: ");
    public static string LogLevel(this string log) => log.SubstringBetween("[", "]:");
}