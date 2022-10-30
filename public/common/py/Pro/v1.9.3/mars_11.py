### AsomeCODE.Version: mars_11.py=1 :End.

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_11/')")
	input()

def turn_right():
    print("### System.Line.RunJS: turn('right')")

def turn_left():
    print("### System.Line.RunJS: turn('left')")

def shoot_missile():
    print("### System.Line.RunJS: missile_launch()")

# import udp_socket
# import internet
# import mars_11

# internet.open_ap("ryu", "123456789a")

# s =  udp_socket.create()
# s.open(1234)

# mars_11.show()

# while True:
# 	msg = s.read_text()
# 	if msg == "H":
# 	    break

# while True:
# 	msg = s.read_text()
# 	if msg:
# 		if msg == "R":
# 			mars_11.turn_right()
# 		elif msg == "L":
# 			mars_11.turn_left()
# 		elif msg == "H":
# 			mars_11.shoot_missile()