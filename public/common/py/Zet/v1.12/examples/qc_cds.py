import tm1637
sensor = AnalogPin()

tm1637.open(5, 6)

while True:
	tm1637.number( sensor.read() )