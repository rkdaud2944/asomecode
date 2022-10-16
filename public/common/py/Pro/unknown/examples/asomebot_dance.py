from asomebot import * 
import scheduler

s = scheduler.create()

ready(5, 6, 7, 8)
align(90, 90, 90, 90)

while True:
	home()
	for i in range(4):
		forward()	
	for i in range(4):
		backward()
	home()
	s.wait(4125)
	
	home()
	mouse()
	s.wait(7942)
	
	home()
	for i in range(4):
		flap()
	s.wait(9749)
	
	home()
	for i in range(4):
		warigari()
	s.wait(11853)
	
	home()
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
	s.wait(30836)