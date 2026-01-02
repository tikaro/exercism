public static class LogAnalysis 
{
    public static string SubstringAfter(this string str, string delimiter)
    {
        return str.Split(delimiter)[1];
    }

    public static string SubstringBetween(this string str, string firstDelimiter, string secondDelimiter)
    {
        var beginningMiddleEnd = str;
        var middleEnd = beginningMiddleEnd.Split(firstDelimiter)[1];
        var middle = middleEnd.Split(secondDelimiter)[0];
        return middle;
    }
    
    public static string Message(this string str) => str.SubstringAfter("]: ");

    public static string LogLevel(this string str) => str.SubstringBetween("[", "]");
}