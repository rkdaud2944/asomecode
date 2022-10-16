import os
import gc
from machine import *
from utime import *
from urandom import *
from socket import *

pin_map = (16, 05, 04, 00, 02, 14, 12, 13, 15, 3, 1, 9, 10)

class OutputDevice:
	def __init__(self, no):
		self.no = no
		self.pin = Pin(pin_map[no], Pin.OUT)

	def value(self):
		return self.pin.value()

	def off(self):
		print('### System.Line.RunJS: OutputPin(%d, 0)' % self.no)
		self.pin.low()

	def on(self):
		print('### System.Line.RunJS: OutputPin(%d, 1)' % self.no)
		self.pin.high()

class ServoDevice:
	def __init__(self, no):
		self.no = no
		self.pin = PWM(Pin(pin_map[no], Pin.OUT), 50, 0)

	def duty(self, value):
		self.pin.duty( int(value) )

	def off(self):
		self.pin.duty(0)

	def angle(self, value):
		segments = (1, 45, 61, 85, 108, 140)
		weights  = (44, 16, 24, 21, 32)
		temp = value / 45
		index = int(temp)
		offset = value - (index * 45)
		self.pin.duty( segments[index] + int(weights[index] * offset / 45) )

def random(n):
	seed( ticks_us() )
	return getrandbits(32) % n

def delay(t):
	sleep(t)

def DigitalPin(no):
	return Pin(pin_map[no])

def OutputPin(no):
	return OutputDevice(no)

def InputPin(no):
	return Pin(pin_map[no], Pin.IN)

def InputPullUp(no):
	return Pin(pin_map[no], Pin.IN, Pin.PULL_UP)

def AnalogPin():
	return ADC(0)

def ServoPin(no):
	return ServoDevice(no)

def turnoff_pins():
	for i in range(1, 9):
		pin = PWM(Pin(pin_map[i], Pin.OUT), 50, 0)
		pin.deinit() 
		pin = OutputPin(i)
		pin.off() 
	pin = OutputPin(12)
	pin.off() 

s = None
c = None
i = 0 # Loop count

def open_code_server(port):
	global s

	addr = getaddrinfo('0.0.0.0', port)[0][-1]
	s = socket()
	s.settimeout(0.005)
	s.bind(addr)
	s.listen(4)

def accept_code_socket():
	try:
		cl, addr = s.accept()
		cl.setblocking(False)

		print('client connected from', addr)

		return (cl, cl.makefile('rwb', 0))
	except:
		return None

def read_code():
	global c

	temp = accept_code_socket()
	if temp != None:
		if c != None:
			c[0].close()
			c = temp
		else:
			c = temp
		c[1].write("Ok\n")
		return "### started"

	if c == None:
		return None

	try:
		line = c[1].readline()
		if line:
			return line
		else:
			return None
	except:
		return None

def repeat_count(count=0):
	global i

	if count > 0:
		i = i + 1
		if i > count:
			return False
	return read_code() == None

freq(160000000)
turnoff_pins()

open_code_server(80)

while True:
	line = read_code()
	if line:
		print(line)
		i = 0
		try:
			exec(line)
			c[1].write("Ok\n")
		except Exception  as e:
			c[1].write("error\n")