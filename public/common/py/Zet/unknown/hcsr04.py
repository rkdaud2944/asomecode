### AsomeCODE.Version: hcsr04.py=7 :End.


from boot import *
from utime import *


trig = None
echo = None

old_tick = ticks_ms()
count = 0
cm = 0

def open(t, p):
	global trig, echo, old_tick, count, cm

	trig = OutputPin(t)
	echo = InputPin(p)
	old_tick = ticks_ms()
	count = 1000
	cm = 0

def get_distance():
	global trig, echo, old_tick, count, cm
	
	tick = ticks_ms()
	if (tick > old_tick):
			count = count + (tick - old_tick)
	old_tick = tick

	if count < 200:
		return cm

	count = 0

	trig.off()
	sleep_us(2)
	
	trig.on()
	sleep_us(10)
	trig.off()
	
	t1 = ticks_us()
	while echo.value() == 0:
		t2 = ticks_us()
		if (t2 - t1) > 1000 * 1000:
			cm = 0
			return -1

	t1 = ticks_us()
	t2 = 0
	while echo.value() == 1:
		t2 = ticks_us()
		if (t2 - t1) > 1000 * 1000:
			cm = 0
			return -2
	
	if t2 > t1:
		cm = int((t2 - t1) / 58.0)
		print("### System.Line.RunJS: hcsr04_distance(%d)" % cm)
		return cm
	else:
		cm = 0
		return 0