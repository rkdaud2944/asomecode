### AsomeCODE.Version: clock.py=4 :End.


from utime import *


offset = 0

def set(datetime):
	global offset
	temp = (datetime[0], datetime[1], datetime[2], datetime[4], datetime[5], datetime[6], 0, 0)
	offset = mktime(temp)

def datetime(y, m, d, h, n, s):
	global offset
	offset = mktime( (y, m, d, h, n, s, 0, 0) )

def year():
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return current[0]
	
def month():
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return current[1]
	
def day():
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return current[2]

def week():
	week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return week_text[ current[6] ]
	
def hour():
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return current[3]

def minute():
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return current[4]
	
def second():
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	return current[5]

def millis():
	return ticks_ms() % 1000

def text():	
	week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	passed = mktime( localtime() )
	current = localtime(offset + passed)
	print(current)
	return "%d.%d.%d (%s) %d:%d:%d" % (current[0], current[1], current[2], week_text[current[6]], current[3], current[4], current[5])