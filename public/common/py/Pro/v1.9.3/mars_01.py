### AsomeCODE.Version: mars_01.py=1 :End.

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_01/')")
	input()

def charge(value):
	global energy
	energy = value
	print("### System.Line.RunJS: set_gauge({})".format(value))

def display_battery():
	print("### System.Line.RunJS: display_battery({})".format(energy))

def display_message(msg):
	print("### System.Line.RunJS: display_message('{}')".format(msg))