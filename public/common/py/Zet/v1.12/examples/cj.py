from asomebot import * 
import cj101 
import udp_socket

u = udp_socket.Server()
u.open(1234)

cj101.offset = 0

cj101.start()

while True:
	msg = u.read_text()
	if msg:
		if msg == 'H':
			home()
			turn_off()
		elif msg == 'F':
			forward()
		elif msg == 'B':
			backward()
		elif msg == 'L':
			turn_left()
		elif msg == 'R':
			turn_right()
		elif msg == '1':
			mouse()
		elif msg == '2':
			flap()
		elif msg == '3':
			warigari()
		elif msg == '4':
			tick_tock()
		elif msg == '5':
			wiggle()
		elif msg == '6':
			ballet()
		elif msg == '7':
			left_swing()
		elif msg == '8':
			right_swing()
		elif msg == '9':
			yaho()
		elif msg == '10':
			moonwalk()
		elif msg == '11':
			cj101.dance()
		elif msg == '12':
			cj101.dance()