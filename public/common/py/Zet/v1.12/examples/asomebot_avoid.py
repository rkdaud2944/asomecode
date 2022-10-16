import asomebot
import hcsr04

asomebot.ready(5, 6, 7, 8)
hcsr04.open(3, 2)

count = 0;

while True:
	cm = hcsr04.get_distance()
	if (cm > 0) and (cm < 5):
		count = 50
			
	if count > 10:
		asomebot.backward()
	elif count > 0:
		asomebot.turn_left()
	else:
		asomebot.forward()
			
	if count > 0:
		count = count - 1