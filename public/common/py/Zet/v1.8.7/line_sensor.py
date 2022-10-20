### AsomeCODE.Version: line_sensor.py=4 :End.


from boot import *


LEFT = 1
RIGHT = 2
BOTH = 4
NOTHING = 8

left = None
right = None

def ready():
	global left, right
	left = InputPin(12)
	right = AnalogPin()

def read():
	result = 0
	if right.read() > 200: result = LEFT
	if left.value() == 1: result = result + RIGHT
	if result > 2: result = BOTH
	if result == 0: result = NOTHING
	return result