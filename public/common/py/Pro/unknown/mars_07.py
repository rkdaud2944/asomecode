### AsomeCODE.Version: mars_07.py=1 :End.

y =0
speed = 0
is_engine_on = False

def show():
	global y, speed
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_07/')")
	input()
	y =0
	speed = 0

def update():
	global y, speed
	y += speed
	if is_engine_on:
		speed -= 0.05
		print("### System.Line.RunJS: move_probe({}, {}, 'on')".format(y, speed))
	else:
		speed += 0.01
		print("### System.Line.RunJS: move_probe({}, {}, 'off')".format(y, speed))

def get_speed():
	return(speed)

def engine_on():
	global is_engine_on
	is_engine_on = True

def engine_off():
	global is_engine_on
	is_engine_on = False

def is_landed():
	if y >= 200:
		return True
	else:
		return False

def cheack_result():
	if speed > 0.3:
		print("### System.Line.RunJS: probe_state('explode')")
		print("### System.Line.RunJS: show_result(0)")
	else:
		engine_off()
		print("### System.Line.RunJS: show_result(1)")