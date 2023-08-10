### AsomeCODE.Version: max7219.py=6 :End.


from boot import *
from machine import *


clk = None
cs  = None
din = None


def open(aclk, acs, adin):
	global clk, cs, din
	
	clk = Pin(pin_map[aclk], Pin.OUT)
	cs = Pin(pin_map[acs], Pin.OUT)
	din = Pin(pin_map[adin], Pin.OUT)

	write(0x09, 0x00)
	write(0x0a, 0x0f)
	write(0x0b, 0x07)
	write(0x0c, 0x01)

	clear()


def clear():
	draw([0, 0, 0, 0, 0, 0, 0, 0])


def write_byte(data):
	global clk, cs, din
	
	for i in range(8):
		clk.low()
		din.value(data & 0x80)
		data = data << 1
		clk.high()


def write(index, data):
	global clk, cs, din
	
	cs.low()
	write_byte(index)
	write_byte(data)
	cs.high()


def draw(data):
	global clk, cs, din
	
	for i in range(8):
		cs.low()
		write_byte(i+1)
		write_byte(data[i])
		cs.high()
