### AsomeCODE.Version: line_sensor.py=5 :End.


from boot import *


LEFT = 1
RIGHT = 2
BOTH = 4
NOTHING = 8

left = None
right = None

def ready():
	global left, right
	left = AnalogPin(2)
	right = AnalogPin(1)

def read():
	result = 0
	if right.read() > 500: result = LEFT
	if left.read() > 500: result = result + RIGHT
	if result > 2: result = BOTH
	if result == 0: result = NOTHING
	return result