from asomebot import * 
import udp_socket
import internet

internet.open_ap("Asomebot")
ready(5, 6, 7, 8)
home()

s = udp_socket.Server()
s.open(1234)

def dance():
	home()
	mouse()
	home()
	warigari()
	warigari() 
	warigari()
	home()
	wiggle()
	wiggle()
	wiggle()
	ballet()
	home()  
	moonwalk()
	moonwalk()   
	home()  
	yaho()     
	home()       
	turn_right()
	turn_right()
	turn_left()
	turn_left()
	home()  
	swing()
	swing()
	home() 
	flap()
	flap()
	home() 
	warigari()
	warigari()
	warigari()
	home() 
	tick_tock()
	tick_tock()
	tick_tock()
	home() 
	ballet()
	yaho()
	ballet()
	yaho()
	home()

while True:
	msg = s.read_text()
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
			swing()
		elif msg == '11':
			moonwalk()
		elif msg == '12':
			dance()