### AsomeCODE.Version: mars_13.py=1 :End.

def show_sender():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_13_sender/')")
	input()

def show_receiver():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_13_receiver/')")
	input()

def set_color(color):
	print("### System.Line.RunJS: setColor('{}')".format(color))

def draw_pixel(x, y):
	print("### System.Line.RunJS: draw_image({}, {})".format(x, y))

# 보내는쪽
# import internet
# import udp_socket
# import mars_13

# internet.connect("ryu", "123456789a")

# s = udp_socket.Server()
# s.open(1234)

# mars_13.show_sender()

# while True:
# 	msg = input()
#     s.send_text("192.168.4.1", 1234, msg)

# 받는 쪽
# import internet
# import udp_socket
# import mars_13

# internet.open_ap("ryu", "123456789a")

# s = udp_socket.Server()
# s.open(1234)

# mars_13.show_receiver()

# while True:
# 	msg = input()
# 	if msg:
# 		if msg.find(',') > -1:
#             location = msg.split(',')
# 			x = location[0]
# 			y = location[1]
# 			mars_13.draw_pixel(x, y)
# 		else:
# 			mars_13.set_color(msg)