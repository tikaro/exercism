class RemoteControlCar
{
    private readonly int _speed;
    private readonly int _batteryDrain;
    private int batteryLevel;
    private int _distanceDriven = 0;

    public RemoteControlCar(int speed, int batteryDrain)
    {
        this.batteryLevel = 100;
        this._speed = speed;
        this._batteryDrain = batteryDrain;
    }

    public bool BatteryDrained() => (batteryLevel < this._batteryDrain);

    public int DistanceDriven() => this._distanceDriven;

    public void Drive()
    {
        if (this.batteryLevel < this._batteryDrain)
        {
            return;
        }
        this._distanceDriven += this._speed;
        this.batteryLevel -= this._batteryDrain;
    }

    public static RemoteControlCar Nitro() => new RemoteControlCar(50, 4);
}

class RaceTrack
{
    private int _length;

    public RaceTrack(int distance) => this._length = distance;

    public bool TryFinishTrack(RemoteControlCar car)
    {
        while (!car.BatteryDrained())
        {
            car.Drive();
        }
        return car.DistanceDriven() >= this._length;
    }
}
