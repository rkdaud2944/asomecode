### AsomeCODE.Version: flag_game.py=3 :End.

joined = 0

def show():
	global joined
	joined = 0
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=flag_game/')")
	input()

def join(no):
	global joined
	joined = joined | no

def is_ready():
	return joined == 3

def count_down(count):
	print("### System.Line.RunJS: gunman_ready(%d)" % count)

def win(player):
	print("### System.Line.RunJS: gunman_win(%d)" % player)
