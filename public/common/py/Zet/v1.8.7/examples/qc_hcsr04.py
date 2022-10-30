import tm1637
import hcsr04

tm1637.open(5, 6)

while True:
	hcsr04.open(7, 8)
	tm1637.number( hcsr04.get_distance() )