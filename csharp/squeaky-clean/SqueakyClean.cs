public static class Identifier
{
    public static string Clean(string identifier)
    {
        identifier = identifier.Replace(" ","_");
        return identifier;
    }
}
