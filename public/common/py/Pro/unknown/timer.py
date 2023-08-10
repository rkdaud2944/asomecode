### AsomeCODE.Version: timer.py=1 :End.


from boot import *
import tm1637


min_ = 0
sec_ = 0
mode_ = 2
blink_ = True

old_tick = ticks_ms()
count = 0

def open(clk, dio):
	global old_tick, count

	min_ = 0
	sec_ = 0
	mode_ = 2
	blink_ = True

	old_tick = ticks_ms()
	count = 0

	tm1637.open(clk, dio)
	tm1637.time(min_, sec_, True)

def number(no):
	tm1637.number(no)

def update():
	global blink_, old_tick, count

	tick = ticks_ms()
	if (tick > old_tick):
			count = count + (tick - old_tick)
	old_tick = tick

	if mode_ == 2:
		count = 0
		tm1637.time(min_, sec_, True)
		return

	if count < 500: return

	count = 0

	if mode_ == 0:
		blink_ = not blink_
		if blink_:
			text = tm1637.encode_string("  {0:0>2d}".format(sec_))
			tm1637.write(text)
		else:
			tm1637.time(min_, sec_, True)

	if mode_ == 1:
		blink_ = not blink_
		if blink_:
			text = tm1637.encode_string("{0:0>2d}".format(min_))
			tm1637.write(text)
		else:
			tm1637.time(min_, sec_, True)

def set_mode(v):
	global mode_
	mode_ = v % 3
	
def mode():
	return mode_
	
def set_value(v):
	global min_, sec_

	if v < 0: v = 0
	if v > 59: v = 59

	if mode_ == 0: min_ = v
	if mode_ == 1: sec_ = v

def value():
	if mode_ == 0: return min_
	if mode_ == 1: return sec_
	return 0
	
def duration():
	return min_ * 60 + sec_	
