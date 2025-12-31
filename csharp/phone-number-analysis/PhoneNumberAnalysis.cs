public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        int dialingCode = int.Parse(phoneNumber.Substring(0, 3));
        int prefix = int.Parse(phoneNumber.Substring(4, 3));
        int lineNumber = int.Parse(phoneNumber.Substring(8, 4));

        bool isNewYork = dialingCode == 212;
        bool isFake = prefix == 555;
        string localNumber = lineNumber.ToString("D4");

        return (isNewYork, isFake, localNumber);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        return phoneNumberInfo.IsFake;
    }
}
