### AsomeCODE.Version: interval.py=5 :End.


from utime import *


class Interval(object):
	
	def __init__(self, capacity):
		self.capacity = capacity
		self.old_tick = ticks_ms()
		self.count = 0

	def set(self, capacity):
		self.capacity = capacity

	def get(self):
		tick = ticks_ms()
		if (tick > self.old_tick):
			term = tick - self.old_tick
		else:
			term = 0
			self.old_tick = tick
		return term

	def start(self):
		self.old_tick = ticks_ms()
		self.count = 0

	def is_active(self):
		tick = ticks_ms()
		if (tick > self.old_tick):
				self.count = self.count + (tick - self.old_tick)
		self.old_tick = tick

		if self.count >= self.capacity:
			self.count = 0
			return True

		return False

def create(capacity=0):
	return Interval(capacity)