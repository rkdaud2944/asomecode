import tm1637
import dht11

tm1637.open(5, 6)
sensor = dht11.create(8)

while True:
	sensor.measure()
	tm1637.number( sensor.temperature() * 100 + sensor.humidity() )
	delay(0.2)