### AsomeCODE.Version: rotary.py=2 :End.


from boot import *
from machine import Timer


class Encoder:

	old_clk = False
	old_value = 0
	value_ = 0
	direction_ = 0

	def __init__(self, clk_pin, dt_pin):
		self.clk = InputPullUp(clk_pin)
		self.dt	 = InputPullUp(dt_pin)

	def set(self, value):
		self.value_ = value

	def value(self):
		return(self.value_)

	def direction(self):
		if not self.has_changed(): return 0
		return(self.direction_)

	def update(self):
		clk = self.clk.value()
		dt  = self.dt.value()

		if not clk and self.old_clk:
			if dt:
				self.value_ = self.value_ + 1
			else:
				self.value_ = self.value_ - 1

		self.old_clk = clk

	def has_changed(self):
		changed = self.old_value != self.value_

		if self.old_value > self.value_: self.direction_ = -1
		elif self.old_value < self.value_: self.direction_ = 1
		else: self.direction_ = 0

		self.old_value = self.value_

		return changed


def create(clk_pin, dt_pin):
    return Encoder(clk_pin, dt_pin)