import asomecar
import hcsr04
import interval

asomecar.ready(1, 2, 7, 8)
hcsr04.open(5, 6)

timer = interval.create(100)

count = 0

while True:
	cm = hcsr04.get_distance()
	if cm < 0:
		continue
		 
	if cm < 10:
		count = 30
		
	if count == 30:
		asomecar.backward()
	if count == 5:
		asomecar.turn_left()
	if count == 0:
		asomecar.forward()
			
	if timer.is_active() and (count > 0):
		count = count - 1