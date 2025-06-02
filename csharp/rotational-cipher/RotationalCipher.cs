public static class RotationalCipher
{
    public static string Rotate(string text, int shiftKey)
    {
        var rotatedText = new char[text.Length];
        for (int i = 0; i < text.Length; i++)
        {
            char currentChar = text[i];
            if (char.IsLetter(currentChar))
            {
                char baseChar = char.IsLower(currentChar) ? 'a' : 'A';
                int newIndex = (currentChar - baseChar + shiftKey) % 26;
                rotatedText[i] = (char)(baseChar + newIndex);
            }
            else
            {
                rotatedText[i] = currentChar; // Non-letter characters remain unchanged
            }
        }
        return new string(rotatedText);
    }
}