static class SavingsAccount
{
        private const float PenaltyInterestRate = 3.213f;
        private const float GoodInterestRate = 0.5f;
        private const float BetterInterestRate = 1.621f;
        private const float BestInterestRate = 2.475f;
    public static float InterestRate(decimal balance)
    {
        if (balance < 0) { return PenaltyInterestRate; }
        else if (balance < 1000) { return GoodInterestRate; }
        else if (balance < 5000) { return BetterInterestRate;}
        else { return BestInterestRate; }
    }

    public static decimal Interest(decimal balance)
    {
        return balance * (decimal)InterestRate(balance) / 100;
    }

    public static decimal AnnualBalanceUpdate(decimal balance)
    {
        return balance + Interest(balance);
    }

    public static int YearsBeforeDesiredBalance(decimal balance, decimal targetBalance)
    {
        if (balance >= targetBalance) { return 0; }
        int years = 0;
        while (balance < targetBalance)
        {
            balance = AnnualBalanceUpdate(balance);
            years++;
        }
        return years;
    }
}
