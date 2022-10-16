### AsomeCODE.Version: max7219.py=7 :End.


from boot import *
from machine import *


class MAX7219(object):

	def __init__(self, aclk, acs, adin):
		self.clk = Pin(pin_map[aclk], Pin.OUT)
		self.cs = Pin(pin_map[acs], Pin.OUT)
		self.din = Pin(pin_map[adin], Pin.OUT)

		self.write(0x09, 0x00)
		self.write(0x0a, 0x0f)
		self.write(0x0b, 0x07)
		self.write(0x0c, 0x01)

		self.clear()


	def clear(self):
		self.draw([0, 0, 0, 0, 0, 0, 0, 0])


	def write_byte(self, data):
		for i in range(8):
			self.clk.low()
			self.din.value(data & 0x80)
			data = data << 1
			self.clk.high()


	def write(self, index, data):
		self.cs.low()
		self.write_byte(index)
		self.write_byte(data)
		self.cs.high()


	def draw(self, data):
		for i in range(8):
			self.cs.low()
			self.write_byte(i+1)
			self.write_byte(data[i])
			self.cs.high()


def create(aclk, acs, adin):
	return MAX7219(aclk, acs, adin)


obj = None


def open(aclk, acs, adin):
	global obj
	obj = create(aclk, acs, adin)


def clear():
	obj.clear()


def write_byte(data):
	obj.write_byte(data)


def write(index, data):
	obj.write(index, data)


def draw(data):
	obj.draw(data)
