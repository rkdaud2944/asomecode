### AsomeCODE.Version: asomebot.py=48 :End.


from boot import *
from asomebot_align import *
from machine import *
from utime import *

w0 = 0.008
w1 = 0.03
w2 = 0.1
w3 = 0.2
w4 = 0.3

servos = []
old_angles = [-1, -1, -1, -1]

def ready(pin1, pin2, pin3, pin4):
	global servos
	servos = []
	pins = (pin1, pin2, pin3, pin4)
	for i in range(4): servos.append(PWM(Pin(pin_map[pins[i]], Pin.OUT), 300, 0))

def align(b0, b1, b2, b3):
	global base
	base = (b0, b1, b2, b3)

def angle(n,d):
	if d != old_angles[n]: servos[n].duty( 620 * d // 180 + 120 )
	old_angles[n] = d

def angles(n,d,w=0):
	size = len(n)

	if w > 0:
		start = ticks_ms()
		while True:
			current = ticks_ms()
			if current < start:
				break

			term = current - start
			if term > w:
				break

			ratio = term / w
			
			for i in range(size): 
				index = n[i]
				diff = (base[index] + d[i] - old_angles[index]) * ratio
				a = old_angles[index] + int(diff)
				servos[index].duty( 620 * a // 180 + 120 )

			delay(w1)

	for i in range(size): angle(n[i], base[n[i]] + d[i])

def turn_off():
	for servo in servos:
		servo.duty(0)
		servo.deinit()

def home():
	for i in range(4): 
		servos[i].duty( 620 * base[i] // 180 + 120 )
		old_angles[i] = base[i]
	delay(w4)

def leg_up(d=1, a1=60, a2=25):
	if d == 1:
		angle(2, base[2] - a1)
		angles([3], [-a2], 300)
	else:
		angle(3, base[3] + a1)
		angles([2], [a2], 300)

temp_walk = 0

def walk(d, a1, a2, a3, m, s1, s2):
	angles((3, 2), (-a1, -a2), s1)
	angles((0, 1), (-a3 * d, -a3 * d), s2)
	angles((2, 3), (0, 0), s1)

	if m <= 0:
		angles((2, 3), (a1, a2+m), s1)
	else:
		angles((2, 3), (a1-m, a2), s1)
	angles((0, 1), (a3 * d, a3 * d), s2)
	angles((2, 3), (0, 0), s1)
	
def forward(a1=20, a2=40, a3=20, m=0, s1=150, s2=300):
	walk(1, a1, a2, a3, m, s1, s2)

def backward(a1=20, a2=40, a3=20, m=0, s1=150, s2=300):
	walk(-1, a1, a2, a3, m, s1, s2)

def turn(d, a1, a2, a3, s):
	angles((2, 3), (-a1, -a2), s)
	delay(w4)
	
	a = 1
	if d == 1: a = 0

	angles([a], [-a3], s)
	delay(w4)

	angles( (2, 3), (0, 0), s)
	delay(w2)
	
	angles((3, 2), (a1, a2), s)
	delay(w4)

	angles([0, 1], [0, 0], s)
	delay(w2)

	angles( (2, 3), (0, 0), s)
	delay(w2)
	
def turn_left(a1=60, a2=30, a3=25, s=300):
	turn(1, a1, a2, a3, s)

def turn_right(a1=60, a2=30, a3=25, s=300):
	turn(-1, a1, a2, a3, s)

def foot_wave(d=1):
	no = 3
	if d == -1: no = 2
	b = base[no]
	for i in range(10):
		a = ((i % 3) - 1) * 20
		angle(no, b + a * d)
		delay(w3)

def mouse(d=1, a1=70, a2=30):
	leg_up(d, a1, a2)
	foot_wave(-d)

def flap():
	angles( (3, 2), (30, -30), 0.15)
	delay(0.15)
	angles( (3, 2), (-30, +30), 0.15)
	delay(0.15)
	
def warigari(w=0.2, a=45):
	angles( (0, 1), (-a, -a) ) 
	delay(w)
	angles( (0, 1), (a, a) )
	delay(w)

def tock(d=1, a=20):
	no = 2
	if d == -1: no = 3
	b = base[3]
	angle(no, b + a * d)
	delay(0.17)
	angle(no, b)
	delay(0.17)

def tick_tock():
	angle(0, base[0] - 45)
	delay(w3)
	angle(2, base[2] - 20)
	delay(w3)
	angle(2, base[2] + 30)
	delay(w3)

def wiggle():
	angles( (2, 3), (-30, -15) )
	delay(w3)
	angles( (2, 3), (0, 0) )
	delay(w3)
	angles( (2, 3), (30, 15) )
	delay(w3)
	angles( (2, 3), (0, 0) )
	delay(w3)
	
def ballet(a1=-40, a2=40):
	angles( (2, 3),  (a1, a2) )
	delay(1)
			
def left_swing():
	angles( (0, 2),  (-45, 45) )
	delay(w4)

def right_swing():
	angles( (1, 3),  (45, -45) )
	delay(w4)

def yaho():
	angles( (2, 3),  (50, -50) )
	delay(w4)

def swing():
	angle(2, base[2] - 60)
	delay(w3)
	angle(2, base[2])
	delay(w3)
	angle(3, base[3] + 60)
	delay(w3)
	angle(3, base[3])
	delay(w3)
	
def moonwalk():
	a2 = base[2]
	a3 = base[3] + 10
	for i in range(12):
		a3 = a3 + 2
		angle(3, a3)
		delay(w1)
	for i in range(12):
		a2 = a2 - 2
		a3 = a3 + 2
		angle(2, a2)
		angle(3, a3)
		delay(w1)
	for i in range(12):
		a2 = a2 - 2
		a3 = a3 - 2
		angle(2, a2)
		angle(3, a3)
		delay(w1)
	for i in range(12):
		a2 = a2 + 2
		a3 = a3 - 2
		angle(2, a2)
		angle(3, a3)
		delay(w1)
	for i in range(12):
		a2 = a2 + 2
		angle(2, a2)
		delay(w1)
	home()