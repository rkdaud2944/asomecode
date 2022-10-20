### AsomeCODE.Version: mars_13.py=1 :End.

def show_sender():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_13_sender/')")
	input()

def show_receiver():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_13_receiver/')")
	input()

def set_color(color):
	color = color[1:-1]
	print("### System.Line.RunJS: setColor('{}')".format(color))

def draw_pixel(x, y):
	x = x[1:]
	y = y[:-1]
	print("### System.Line.RunJS: draw_image({}, {})".format(x, y))