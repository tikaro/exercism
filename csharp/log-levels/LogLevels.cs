static class LogLine
{
    public static string Message(string logLine) => logLine
        .Split(new[] { "]: " }, StringSplitOptions.None)
        .Last()
        .Trim();

    public static string LogLevel(string logLine) => logLine
        .Split(new[] { "]: " }, StringSplitOptions.None)
        .First()
        .Trim('[',']',':')
        .ToLower();

    public static string Reformat(string logLine) => $"{Message(logLine)} ({LogLevel(logLine)})";
}
