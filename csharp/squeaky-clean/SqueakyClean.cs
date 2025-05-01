public static class Identifier
{
    public static string Clean(string identifier)
    {
        // replace spaces with underscores
        identifier = identifier.Replace(" ","_");

        var result = new System.Text.StringBuilder();

        // replace control characters with "CTRL"
        foreach (char c in identifier)
        {
            if (char.IsControl(c))
            {
                result.Append("CTRL");
            } else {
                result.Append(c);
            }
        } 
        identifier = result.ToString();
        result.Clear();

        // convert kebab-case ab-cd to camelCase abCd
        bool capitalizeNext = false;
        foreach (char c in identifier)
        {

            if (c == '-')
            {
                capitalizeNext = true;
            } else {
                result.Append(capitalizeNext ? char.ToUpper(c) : c);
                capitalizeNext = false;
            }
        }
        identifier = result.ToString();
        result.Clear();

        // omit non-ASCII characters
        foreach (char c in identifier)
        {
            if (c <= 127) // ASCII range check
            {
                result.Append(c);
            }
        }
        identifier = result.ToString();
        result.Clear();

        // omit digits
        foreach (char c in identifier)
        {
            if (!char.IsDigit(c)) // number check
            {
                result.Append(c);
            }
        }
        identifier = result.ToString();
        result.Clear();
        
        return identifier;    }
}
