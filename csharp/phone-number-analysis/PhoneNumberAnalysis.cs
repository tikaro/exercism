public static class PhoneNumber
{
    public static (bool IsNewYork, bool IsFake, string LocalNumber) Analyze(string phoneNumber)
    {
        string dialingCode = phoneNumber[0..3];
        string prefix = phoneNumber[4..7];
        string localNumber = phoneNumber[8..];

        bool isNewYork = dialingCode == "212";
        bool isFake = prefix == "555";

        return (isNewYork, isFake, localNumber);
    }

    public static bool IsFake((bool IsNewYork, bool IsFake, string LocalNumber) phoneNumberInfo)
    {
        return phoneNumberInfo.IsFake;
    }
}
