### AsomeCODE.Version: mars_10.py=1 :End.

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_10/')")
	input()

def rotate_right():
	print("### System.Line.RunJS: image_rotation('right')")

def rotate_left():
	print("### System.Line.RunJS: image_rotation('left')")

def forward():
	print("### System.Line.RunJS: go_to_forward()")

def backward():
	print("### System.Line.RunJS: go_to_backward()")

# import udp_socket
# import internet
# import mars_10

# internet.open_ap("ryu", "123456789a")
# s =  udp_socket.create()
# s.open(1234)
# mars_10.show()
# delay(1)
# while True:
# 	msg = s.read_text()
# 	if msg:
# 		if msg == "F":
# 			mars_10.forward()
# 		elif msg == "B":
# 			mars_10.backward()
# 		elif msg == "R":
# 			mars_10.rotate_right()
# 		elif msg == "L":
# 			mars_10.rotate_left()