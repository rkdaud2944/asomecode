### AsomeCODE.Version: mars_09.py=1 :End.

array= [[1,1,1,1,1,1],
		[1,2,0,0,1,1],
		[1,0,1,0,1,1],
		[1,0,1,0,1,2],
		[1,0,1,1,0,0],
		[1,2,0,0,0,1]]
visited = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_09/')")
	input()
	for i in range(6):
		for j in range(6):
			visited[i][j] =0

def scan():
	for x in range(1, 6):
		for y in range(1, 6):
			if array[y][x] == 1:
				print("### System.Line.RunJS: make_obstacle('{}', '{}')".format(x, y))
			if array[y][x] == 2:
				print("### System.Line.RunJS: make_mineral('{}', '{}')".format(x, y))

def move(x,y,z) :
	global visited
	visited[y][x] = 1
	print('### System.Line.RunJS: move({}, {}, {})'.format(x, y, z))
	if array[y][x] == 2:
		print('### System.Line.RunJS: get_mineral({}, {})'.format(x, y))

def check_arrival(x,y) :
	now_position = str(x) +str(y)
	if now_position == '53':
		print('### System.Line.RunJS: arrive()')
		return

def cheack_state(x, y):
	state = False
	if 0 < x < 6 and 0 < y < 6:
		if (visited[y][x] == 0) and (array[y][x] != 1):
			state = True
	return state

def up():
	print('### System.Line.RunJS: up()')

def down():
	print('### System.Line.RunJS: down()')

def right():
	print('### System.Line.RunJS: right()')

def left():
	print('### System.Line.RunJS: left()')