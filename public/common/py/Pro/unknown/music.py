### AsomeCODE.Version: music.py=2 :End.


from boot import *
from machine import *
from utime import *	


notes = {
	' ': 10,
	'C0': 16.35,
	'Db0': 17.32,
	'D0': 18.35,
	'Eb0': 19.45,
	'E0': 20.6,
	'F0': 21.83,
	'Gb0': 23.12,
	'G0': 24.5,
	'Ab0': 25.96,
	'A0': 27.5,
	'Bb0': 29.14,
	'B0': 30.87,
	'C1': 32.7,
	'Db1': 34.65,
	'D1': 36.71,
	'Eb1': 38.89,
	'E1': 41.2,
	'F1': 43.65,
	'Gb1': 46.25,
	'G1': 49,
	'Ab1': 51.91,
	'A1': 55,
	'Bb1': 58.27,
	'B1': 61.74,
	'C2': 65.41,
	'Db2': 69.3,
	'D2': 73.42,
	'Eb2': 77.78,
	'E2': 82.41,
	'F2': 87.31,
	'Gb2': 92.5,
	'G2': 98,
	'Ab2': 103.83,
	'A2': 110,
	'Bb2': 116.54,
	'B2': 123.47,
	'C3': 130.81,
	'Db3': 138.59,
	'D3': 146.83,
	'Eb3': 155.56,
	'E3': 164.81,
	'F3': 174.61,
	'Gb3': 185,
	'G3': 196,
	'Ab3': 207.65,
	'A3': 220,
	'Bb3': 233.08,
	'B3': 246.94,
	'C4': 261.63,
	'Db4': 277.18,
	'D4': 293.66,
	'Eb4': 311.13,
	'E4': 329.63,
	'F4': 349.23,
	'Gb4': 369.99,
	'G4': 392,
	'Ab4': 415.3,
	'A4': 440,
	'Bb4': 466.16,
	'B4': 493.88,
	'C5': 523.25,
	'Db5': 554.37,
	'D5': 587.33,
	'Eb5': 622.25,
	'E5': 659.26,
	'F5': 698.46,
	'Gb5': 739.99,
	'G5': 783.99,
	'Ab5': 830.61,
	'A5': 880,
	'Bb5': 932.33,
	'B5': 987.77
}


beeper = None
volume = 512

def open(pin):
	global beeper
	beeper = PWM(Pin(pin_map[pin]))
	beeper.freq(1)
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