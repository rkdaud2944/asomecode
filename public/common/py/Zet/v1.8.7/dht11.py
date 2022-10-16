### AsomeCODE.Version: dht11.py=2 :End.


from boot import *
from dht import *
from utime import *

class DHT:

	def __init__(self, pin):
		self.sensor  = DHT11(  InputPin(pin)  )
		self.last_temperature = 0
		self.last_humidity = 0
		self.count = 1000
		self.old = ticks_ms()

	def measure(self):
		now = ticks_ms()
		if now > self.old:
			self.count = self.count + (now - self.old)
		self.old = now;

		if self.count < 1000:
			return

		self.count = 0

		try:
			self.sensor.measure()
			self.last_temperature = self.sensor.temperature()
			self.last_humidity = self.sensor.humidity()
		except:
			pass

	def temperature(self):
		return self.last_temperature

	def humidity(self):
		return self.last_humidity


def create(pin):
	return DHT(pin)