### AsomeCODE.Version: vibration_sensor.py=5 :End.


from boot import *
from utime import *


class VibrationSensor(object):
	
	def __init__(self, pin, capacity):
		self.sensor = InputPullUp(pin)
		self.old_state = self.sensor.value()
		self.old_tick = 0
		self.active_count = 0
		self.capacity = capacity

	def is_active(self):
		state = self.sensor.value()

		if state != self.old_state:
			self.old_state = state
			self.old_tick = ticks_ms()
			self.active_count = self.capacity

		if self.active_count > 0:
			tick = ticks_ms()
			if tick > self.old_tick:
				self.active_count = self.active_count - (tick - self.old_tick)
			self.old_tick = tick

		return self.active_count > 0


def create(pin, capacity):
	return VibrationSensor(pin, capacity)