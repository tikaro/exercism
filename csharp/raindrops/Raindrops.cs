using System;

public static class Raindrops
{
    public static string Convert(int number)
    {
        string speak = "";

        if (number % 3 == 0) {
            speak += "Pling";
        }
        if (number % 5 == 0) {
            speak += "Plang";
        }
        if (number % 7 == 0) {
            speak += "Plong";
        }
        if (speak == "") {
            return number.ToString();
        }
        return speak;
    }
}