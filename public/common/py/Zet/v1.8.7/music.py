### AsomeCODE.Version: music.py=10 :End.


from boot import *
from machine import *
from utime import *	
from notes import *	


beeper = None
volume = 512

def open(pin):
	global beeper
	beeper = PWM(Pin(pin_map[pin], Pin.OUT), 0, 1000)
	beeper.freq(10)
	sleep(1.0)
	beeper.duty(0)

def close():
	global beeper
	if beeper != None: beeper.deinit()

def get_tone(name):
	return round(notes[name])

def tone(freq, duration=0):
    global beeper

	if freq <= 0:
		beeper.duty(0)
	else:
		beeper.duty(volume)
		beeper.freq(freq)

	if duration > 0:
		sleep(duration / 1000)
		beeper.duty(0)

def mute():
	beeper.duty(0)	

def note(name, duration):
	global beeper

	if name == ' ':
		beeper.duty(0)
		sleep(duration / 1000)
	else:
		beeper.duty(volume)
		beeper.freq( round(notes[name]) )
		sleep(duration / 1000)
		beeper.duty(0)
		sleep(duration / (10 * 1000))