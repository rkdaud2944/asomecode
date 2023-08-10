from asomebot import * 
import scheduler

offset = 200

def start():
	ready(5, 6, 7, 8)
	home()
	turn_off()

def dance():
	s = scheduler.create()

	s.wait(2600 + offset)
		
	leg_up(-1, 60, 30)
	for i in range(27):
		tock(-1)
		delay(0.17)

	s.wait(16800 + offset)
	home()

	s.wait(18000 + offset)
	for i in range(4):
		flap()
		delay(0.2)

	s.wait(21500 + offset)
	for i in range(4):
		flap()
		delay(0.2)

	s.wait(25500 + offset)
	for i in range(2):
		warigari(0.45, 20)
		delay(0.13)  
	home()

	s.wait(29200 + offset)
	for i in range(2):
		warigari(0.45, 20)
		delay(0.13)  
	home()
	
	s.wait(31000 + offset)
	wiggle()
	wiggle()
	home()

	s.wait(33200 + offset)
	leg_up(1)  
	delay(1)  
	home()
	
	s.wait(35500 + offset)
	wiggle()
	wiggle()
	home()

	s.wait(37000 + offset)
	leg_up(-1)  
	delay(1)  
	home()
	
	s.wait(39000 + offset)
	wiggle()
	wiggle()
	delay(0.3)
	home()

	s.wait(40200 + offset)
	ballet()
	s.wait(41000 + offset)
	home()
	
	s.wait(42500 + offset)
	home()
	for i in range(3):
		warigari()
	home()

	s.wait(44400 + offset)
	ballet()
	for i in range(3):
		warigari()
	delay(0.2)
	home()
		
	s.wait(48000 + offset)
	flap()
	for i in range(5):
		warigari()

	home()
	for i in range(2):
		swing()
	home()
	for i in range(3):
		wiggle()

	
	for i in range(3):
		yaho()
		delay(0.2)
		ballet()
		delay(0.2)
	home()
	
	s.wait(63700 + offset)
	moonwalk()
	
	s.wait(67200 + offset)
	moonwalk()
	
	s.wait(71200 + offset)
	moonwalk()
	
	s.wait(75000 + offset)
	moonwalk()

	s.wait(78000 + offset)
	mouse()

	delay(1)
	home()
	turn_off()