### AsomeCODE.Version: buzzer.py=1: End.


from boot import *
from machine import *

class Buzzer(object):

	def __init__(self, pin):
		self.volume = 512
		self.beeper = PWM(Pin(pin_map[pin], Pin.OUT), 0, 1000)
		self.beeper.freq(10)
		delay(1.0)
		self.beeper.duty(0)

	def tone(self, freq):
		if freq <= 0:
			self.beeper.duty(0)
		else:
			self.beeper.duty(self.volume)
			self.beeper.freq(freq)

	def mute(self):
		self.beeper.duty(0)

def create(pin):
	return Buzzer(pin)