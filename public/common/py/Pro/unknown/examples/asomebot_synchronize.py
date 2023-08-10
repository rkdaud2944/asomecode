from asomebot import * 
import scheduler
import udp_socket

ready(5, 6, 7, 8)

s = scheduler.create()

u = udp_socket.Server()
u.open(1234)

while True:
	msg = u.read_text()
	
	if msg == 'H':
		home()
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
		swing()
	elif msg == '11':
		moonwalk()
	elif msg == "12":
		s.start()
		home()
		for i in range(4):
			forward()	
		for i in range(4):
			backward()
		s.wait(4125)
		
		home()
		mouse()
		s.wait(7942)
		
		home()
		for i in range(4):
			flap()
		home()
		s.wait(9749)
		
		for i in range(4):
			warigari()
		home()
		s.wait(11853)
		
		for i in range(4):
			wiggle()
		s.wait(14468)
		
		home()
		ballet()
		s.wait(16171)
		
		home()
		ballet()
		for i in range(4):
			warigari()
		home()
		s.wait(19877)
		
		home()
		left_swing()
		home()
		right_swing()
		left_swing()
		right_swing()
		s.wait(22581)
		
		home()
		yaho()
		s.wait(23682)
		
		home()
		for i in range(4):
			moonwalk()
		home()
		s.wait(30836)