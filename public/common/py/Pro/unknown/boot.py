### AsomeCODE.Version: boot.py=5 :End.


import esp
from machine import *
from utime import *
from urandom import *

pin_map = ( 0, 22, 23, 0, 4, 16, 17, 5, 18, 19, 21, 2, 12, 26, 32, 13, 27, 33, 15, 14, 25)
analogs = ( 0, 35, 34)

class OutputDevice:
	def __init__(self, no):
		self.no = no
		self.pin = Pin(pin_map[no], Pin.OUT)

	def value(self):
		return self.pin.value()

	def off(self):
		self.pin.value(0)

	def on(self):
		self.pin.value(1)

class ServoDevice:
	def __init__(self, no):
		self.no = no
		self.pin = PWM(Pin(pin_map[no]))
		self.pin.freq(128)  
		self.pin.duty(0)

	def duty(self, value):
		self.pin.duty( int(240 * value / 70) )

	def off(self):
		self.pin.duty(0)

	def angle(self, value):
		self.pin.duty( 240 * value // 180 + 70 )

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

def AnalogPin(no=1):
	return ADC(Pin(analogs[no]))

def ServoPin(no):
	return ServoDevice(no)

def turnoff_pins(pins=None):
	if pins == None:
		for i in range(1, len(pin_map)):
			pin = PWM(Pin(pin_map[i], Pin.OUT), 50, 0)
			pin.deinit() 
			pin = OutputPin(i)
			pin.off()
	else:
		for i in range(len(pins)):
			pin = PWM(Pin(pin_map[pins[i]], Pin.OUT), 50, 0)
			pin.deinit() 
			pin = OutputPin(pins[i])
			pin.off() 

esp.osdebug(None)
turnoff_pins()
print("### System.Started")