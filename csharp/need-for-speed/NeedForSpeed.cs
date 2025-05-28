class RemoteControlCar
{
    private int batteryLevel;
    private int speed;
    private int batteryDrain;
    private int distanceDriven = 0;
    public RemoteControlCar(int speed, int batteryDrain)
    {
        this.batteryLevel = 100;
        this.speed = speed;
        this.batteryDrain = batteryDrain;
    }

    public bool BatteryDrained()
    {
        return (batteryLevel < this.batteryDrain);
    }

    public int DistanceDriven()
    {
        return this.distanceDriven;
    }

    public void Drive()
    {
        if (this.batteryLevel < this.batteryDrain)
        {
            return;
        }
        this.distanceDriven += this.speed;
        this.batteryLevel -= this.batteryDrain;
    }

    public static RemoteControlCar Nitro()
    {
        return new RemoteControlCar(50, 4);
    }
}

class RaceTrack
{
    private int length;

    public RaceTrack(int distance)
    {
        this.length = distance;
    }

    public bool TryFinishTrack(RemoteControlCar car)
    {
        while (!car.BatteryDrained())
        {
            car.Drive();
        }
        return car.DistanceDriven() >= this.length;
    }
}
