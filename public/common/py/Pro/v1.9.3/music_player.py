### AsomeCODE.Version: music_player.py=1 :End.


from boot import *
import music
import interval

timer = interval.create()
notes = []
index = -1
active = False

def open(pin):
	music.open(pin)

def close():
	music.close()

def tone(freq):
	music.tone(freq)

def add(name, duration):
	notes.append( (name, duration) )

def play():
	global index, active

	index = 0
	timer.start()
	music.tone( music.get_tone(notes[index][0]) )
	active = True

def stop():
	global active

	music.mute()
	active = False

def clear():
	global notes, active

	music.mute()
	notes = []
	active = False

def update():
	global index, active

	if active == False:
		music.mute()
		return

	if timer.get() >= notes[index][1]:
		timer.start()
		index = index + 1
		if index >= len(notes):
			active = False
		else:
			music.tone( music.get_tone(notes[index][0]) )

def is_active():
	return active