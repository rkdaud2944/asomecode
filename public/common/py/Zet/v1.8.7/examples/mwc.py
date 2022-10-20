from asomebot import * 

def start():
	ready(5, 6, 7, 8)
	home()
	turn_off()

def dance():
	for i in range(4):
		flap()
		delay(0.2)		
	home()
	delay(0.5)
		
	leg_up()
	home()
	delay(0.5)

	leg_up(-1)
	home()
	delay(0.5)
		
	for i in range(4):
		warigari()	
	home()
	delay(0.5)	
		
	for i in range(4):
		warigari()		
	home()
	delay(0.5)
	
	wiggle()
	wiggle()
	home()
	delay(0.5)
	
	for i in range(4):
		angle(2, base[2] - 60)
		angle(3, base[3] + 45)
		delay(0.2)
		angle(2, base[2] + 60)
		angle(3, base[3] - 60)
		delay(0.2)		
	home()
	delay(0.5)
	
	moonwalk()
	moonwalk()
	delay(0.5)
	
	swing()
	delay(0.5)

	moonwalk()
	moonwalk()
	delay(0.5)
	
	for i in range(4):
		tock()
	delay(0.5)
	
	for i in range(4):
		tock(-1)
	delay(0.5)
		
	for i in range(4):
		warigari()		
	home()
	delay(0.5)