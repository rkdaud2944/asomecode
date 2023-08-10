### AsomeCODE.Version: car_race.py=4 :End.


position = 0

def show():
	global position
	position = 0
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=car_race/')")
	input()

def show_time(time):
	print("### System.Line.RunJS: show_time(%s)" % time)

def start():
	global position
	position = 0
	print("### System.Line.RunJS: car_start()")

def move(count):
	global position
	if count <= 0: return
	position = position + count
	print("### System.Line.RunJS: car_move(%d)" % position)

def is_finished():
	global position
	return position > 990