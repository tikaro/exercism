static class AssemblyLine
{
    private const int RATE_PER_HOUR = 221;
    private static readonly double[] SUCCESS_RATES = { 0.0, 1.0, 1.0, 1.0, 1.0, 0.9, 0.9, 0.9, 0.9, 0.8, 0.77 };

    public static double SuccessRate(int speed) => SUCCESS_RATES[speed];

    public static double ProductionRatePerHour(int speed) => ( speed * RATE_PER_HOUR ) * SuccessRate(speed);

    public static int WorkingItemsPerMinute(int speed) => (int)(ProductionRatePerHour(speed) / 60);
}
