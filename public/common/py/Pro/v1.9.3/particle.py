### AsomeCODE.Version: particle.py=1 :End.


from boot import *
from utime import *


class Particle:

	def __init__(self, pin):
		self.running = False
		self.start = 0
		self.end = 0
		self.pin = InputPin(6)
		self.pin.irq(trigger=Pin.IRQ_FALLING, handler=self.do_result)

	def measure(self):
		self.pin.value(1)
		self.start = ticks_us()
		self.running = True
		while self.running:
			self.end = ticks_us()
			term = self.end - self.start
	
		self.end = ticks_us()

		term = self.end - self.start
		return term

	def do_result(self, value):
		if self.running == False:
			return
		self.running = False

def create(pin):
	return Particle(pin)