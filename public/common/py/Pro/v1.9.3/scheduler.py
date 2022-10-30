### AsomeCODE.Version: scheduler.py=3 :End.


from utime import *


class Scheduler(object):

	def __init__(self):
		self.offset = 0
		self.count = 0
		self.old = ticks_ms()

	def set_offset(self, t):
		self.offset = t

	def start(self):
		self.count = 0
		self.old = ticks_ms()
		
	def check(self, t):
		now = ticks_ms()
		if now > self.old:
			self.count = self.count + (now - self.old)
		self.old = now;
		return self.count >= (t + self.offset)
		
	def wait(self, t):
		while not self.check(t):
			pass

def create():
	return Scheduler()