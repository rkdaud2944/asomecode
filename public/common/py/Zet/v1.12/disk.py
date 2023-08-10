### AsomeCODE.Version: disk.py=2 :End.


import os
import gc


def list(dir = ""):
	files = os.listdir(dir)
	count = 0
	for f in files:
		if f == "system.run.temp.py":
			continue
		count = count + 1
		print(f)
	print(count, 'file(s)')

def view(filename):
	print("### System.Start.View:", filename)
	f = open(filename)
	while True:
		line = f.readline()
		if not line:
			break
		print(line[:-1])
	f.close()
	print("### System.End.View")

def run(filename):
	gc.collect()
	f = open(filename, 'r')
	source = ''
	while True:
		line = f.read()
		if not line:
			break
		source = source + line
	f.close()
	exec(source)