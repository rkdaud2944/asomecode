### AsomeCODE.Version: boot.py=32 :End.


from machine import *
from utime import *
from urandom import *

pin_map = (16, 05, 04, 00, 02, 14, 12, 13, 15, 3, 1, 9, 10)

class ServoDevice:
    def __init__(self, no):
		self.no = no
		self.pin = PWM(Pin(pin_map[no], Pin.OUT), 50, 0)

	def duty(self, value):
		self.pin.duty( int(value) )

	def off(self):
		self.pin.duty(0)

	def angle(self, value):
		segments = ( 1, 45, 61, 85, 108, 140)
		weights  = (44, 16, 24, 21,  32,  32)
		temp = value / 45
		index = int(temp)
		if index < 0: index = 0
		if index > 5: index = 5
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
	return Pin(pin_map[no], Pin.OUT)

def InputPin(no):
	return Pin(pin_map[no], Pin.IN)

def InputPullUp(no):
	return Pin(pin_map[no], Pin.IN, Pin.PULL_UP)

def AnalogPin():
	return ADC(0)

def ServoPin(no):
	return ServoDevice(no)

def turnoff_pins(pins = (1, 2, 3, 4, 5, 6, 7, 8, 12)):
	for i in range(len(pins)):
		if pins[i] != 12:
			pin = PWM(Pin(pin_map[pins[i]], Pin.OUT), 50, 0)
			pin.deinit() 
		pin = OutputPin(pins[i])
		pin.off() 

freq(160000000)
print("### System.Started")