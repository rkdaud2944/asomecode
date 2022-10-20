### AsomeCODE.Version: mars_14.py=1 :End.

def show_sender():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_14_sender/')")
	input()


def show_receiver():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_14_receiver/')")
	input()

def draw_image(msg):
	if msg == "'black'":
		print("### System.Line.RunJS: setColor('black')")
	elif msg == "'red'":
		print("### System.Line.RunJS: setColor('red')")
	elif msg == "'green'":
		print("### System.Line.RunJS: setColor('green')")
	elif msg == "'blue'":
		print("### System.Line.RunJS: setColor('blue')")
	elif msg == "'yellow'":
		print("### System.Line.RunJS: setColor('yellow')")
	elif msg == "'white'":
		print("### System.Line.RunJS: setColor('white')")
	else:
		location = msg.split(',')
		x = location[0][1:]
		y = location[1][:-1]
		print("### System.Line.RunJS: draw_image({}, {})".format(x, y))
		

# 보내는쪽
# import internet
# import udp_socket
# import mars_14

# internet.connect("ryu", "123456789a")
# s = udp_socket.Server()
# s.open(1234)
# mars_14.show_sender()
# while True:
# 	msg = input()
#     s.send_text("192.168.4.1", 1234, msg)


# 받는 쪽
# import internet
# import udp_socket
# import mars_14

# internet.open_ap("ryu", "123456789a")

# s = udp_socket.Server()
# s.open(1234)
# mars_14.show_receiver()

# while True:
# 	msg = s.read_text()
# 	if msg:
# 		mars_14.draw_image(msg)
