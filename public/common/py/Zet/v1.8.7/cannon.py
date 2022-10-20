### AsomeCODE.Version: cannon.py=3 :End.


import math


angle_ = 0
power_ = 0

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=cannon/')")
	input()

def set_angle(a):
	global angle_
	angle_ = a
	print("### System.Line.RunJS: cannon_angle(%d)" % (a))

def set_power(p):
	global power_
	power_ = p
	print("### System.Line.RunJS: cannon_power(%d)" % (p))

def power_x():
	return round(math.cos(angle_ * math.pi / 180) * power_)

def power_y():
	return round(math.sin(angle_ * math.pi / 180) * power_) * -1

def bullet_moveto(x, y):
	print("### System.Line.RunJS: bullet_moveto(%d, %d)" % (x, y))

def target_moveto(x):
	print("### System.Line.RunJS: target_moveto(%d)" % (x))

def fire():
	print("### System.Line.RunJS: cannon_fire()")

def target_explode():
	print("### System.Line.RunJS: target_explode()")