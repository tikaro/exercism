using System;

public class SpaceAge
{
    public long Seconds;
    private const double EarthYear = 31557600D;
    private const double MercuryYear = EarthYear * 0.2408467D;
    private const double VenusYear = EarthYear * 0.61519726D;
    private const double MarsYear = EarthYear * 1.8808158D;
    private const double JupiterYear = EarthYear * 11.862615D;
    private const double SaturnYear = EarthYear * 29.447498D;
    private const double UranusYear = EarthYear * 84.016846D;
    private const double NeptuneYear = EarthYear * 164.79132D;   

    public SpaceAge(long seconds)
    {
        this.Seconds = seconds;
    }

    public double OnEarth() { return CalcYear(EarthYear); }
    public double OnMercury() { return CalcYear(MercuryYear); }
    public double OnVenus() { return CalcYear(VenusYear); }
    public double OnMars() { return CalcYear(MarsYear); }
    public double OnJupiter() { return CalcYear(JupiterYear); }
    public double OnSaturn() { return CalcYear(SaturnYear); }
    public double OnUranus() { return CalcYear(UranusYear); }
    public double OnNeptune() { return CalcYear(NeptuneYear); }
    public double CalcYear(double yearLength) { 
        double theAge = this.Seconds / yearLength;
        return Math.Round(theAge, 2);
    }
}