### AsomeCODE.Version: asomecar.py=15 :End.


from boot import *


forward_fast = 140
forward_slow = 80
backward_fast = 1
backward_slow = 68

forward_fasts  = (140,   1, 140,   1)
backward_fasts = (  1, 140,   1, 140)
forward_slows  = ( 85,  60,  85,  60)
backward_slows = ( 60,  85,  60,  85)


servos = []


def ready(pin1, pin2, pin3, pin4):
	global servos
	servos = []
	servos.append( ServoPin(pin1) ) 
	servos.append( ServoPin(pin2) )
	servos.append( ServoPin(pin3) )
	servos.append( ServoPin(pin4) )

def stop():
	for servo in servos:
		servo.duty(0)

def move(s1, s2, s3, s4):
	servos[0].duty(s1)
	servos[1].duty(s2)
	servos[2].duty(s3)
	servos[3].duty(s4)

def forward(speed = forward_fasts):
	for i in range(4):
		servos[i].duty(speed[i])
		
def backward(speed = backward_fasts):
	for i in range(4):
		servos[i].duty(speed[i])
		
def turn_left(speed = backward_fast):
	for servo in servos:
		servo.duty(speed)
		
def turn_right(speed = forward_fast):
	for servo in servos:
		servo.duty(speed)

def to_left(speed = backward_slow):
	servos[0].duty(0)
	servos[2].duty(0)
	servos[1].duty(speed)
	servos[3].duty(speed)

def to_right(speed = forward_slow):
	servos[1].duty(0)
	servos[3].duty(0)
	servos[0].duty(speed)
	servos[2].duty(speed)
