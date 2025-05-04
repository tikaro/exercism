public static class Identifier
{
    public static string Clean(string identifier)
    {
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

        // omit non-ASCII characters but keep spaces
        foreach (char c in identifier)
        {
            if (char.IsLetter(c) || char.IsWhiteSpace(c)) // ASCII range check
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

        // omit lowercase greek letters
        foreach (char c in identifier) 
        {
            if (c < 'α' || c > 'ω') {
                result.Append(c);
            }
        }
        identifier = result.ToString();
        result.Clear();

        // replace spaces with underscores
        identifier = identifier.Replace(" ","_");

        return identifier;
    }
}
