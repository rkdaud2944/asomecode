### AsomeCODE.Version: button.py=4 :End.


from boot import *
from machine import *
from utime import *


class Button(object):

	def __init__(self, pin):
		self.button = InputPullUp(pin)
		self.handler = None
		self.old_state = 1
		self.old_is_clicked = 0
		self.old_OnClick = 0
		self.interval = 100

		self.button.irq(trigger=Pin.IRQ_FALLING, handler=self.do_click)

	def value(self):
		return self.button.value()

	def is_clicked(self):
		state = self.button.value()
		is_condition = (self.old_state == 1) and (state == 0)
		self.old_state = state

		if not is_condition:
			return False

		tick = ticks_ms()

		if (self.old_is_clicked != 0) and ((tick-self.old_is_clicked) < self.interval):
			return False

		self.old_is_clicked = tick

		return True

	def do_click(self, value):
		tick = ticks_ms()

		if (self.old_OnClick != 0) and ((tick-self.old_OnClick) < self.interval):
			return

		if self.handler != None:
			self.old_OnClick = tick
			self.handler()


	def setOnClick(self, value):
		self.handler = value


def create(pin):
	return Button(pin)