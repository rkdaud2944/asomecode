### AsomeCODE.Version: lunar_lander.py=5 :End.

y = 0
speed = 0
fuel = 1000
is_engine_on = False

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=lunar_lander/')")
	input()

def start():
	global y, speed, fuel, is_engine_on

	y = 0
	speed = 0
	fuel = 1000
	is_engine_on = False

	print('### System.Line.RunJS: lunar_lander_engine_off()')
	print('### System.Line.RunJS: lunar_lander_moveto(162, 0)')

def ship_move():
	global y, speed, fuel, is_engine_on
	if is_engine_on:
		fuel = fuel - 1
	y = y + speed
	print('### System.Line.RunJS: lunar_lander_moveto(162, %d)' % int(y))

def ship_down():
	global y, speed
	y = y + speed
	print('### System.Line.RunJS: lunar_lander_moveto(162, %d)' % int(y))

def ship_up():
	global y, speed
	y = y - speed
	print('### System.Line.RunJS: lunar_lander_moveto(162, %d)' % int(y))

def ship_speed_up():
	global speed
	speed = speed + 0.08

def ship_speed_down():
	global speed
	speed = speed - 0.08

def fuel_is_empty():
	global fuel
	return fuel == 0

def engine_on():
	global is_engine_on
	is_engine_on = fuel > 0
	if is_engine_on:
		ship_speed_down()
		print('### System.Line.RunJS: lunar_lander_engine_on()')
	else:
		ship_speed_up()
		print('### System.Line.RunJS: lunar_lander_engine_off()')

def engine_off():
	global is_engine_on
	is_engine_on = False
	ship_speed_up()
	print('### System.Line.RunJS: lunar_lander_engine_off()')

def is_landed():
	global y
	return y >= 215

def ship_explode():
	print('### System.Line.RunJS: lunar_lander_explode()')
