### AsomeCODE.Version: maze_maker.py=3 :End.

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=maze_maker/')")
	input()

def set_cell_type(x, y, cell_type):
	print("### System.Line.RunJS: set_cell_type(%d, %d, %d)" % (x, y, cell_type))

def move_xy(x, y):
	print("### System.Line.RunJS: move_xy(%d, %d)" % (x, y))

def get_left(path, x, y):
    x = x - 1
    if x < 0: return (9, -1, -1)
    return (path[y][x], x, y)

def get_right(path, x, y):
    x = x + 1
    if x >= 10: return (9, -1, -1)
    return (path[y][x], x, y)

def get_up(path, x, y):
    y = y - 1
    if y < 0: return (9, -1, -1)
    return (path[y][x], x, y)

def get_down(path, x, y):
    y = y + 1
    if y >= 8: return (9, -1, -1)
    return (path[y][x], x, y)

def find_next_move(path, x, y):
	values = (get_left(path, x, y), get_right(path, x, y), get_up(path, x, y), get_down(path, x, y))
	
	min_value = 9
	index = -1    
	
	for i in range(4):
		if values[i][0] < min_value:
			index = i
			min_value = values[i][0]

	if min_value >= 9:
		return (9, -1, -1)
	else:
		return values[index]