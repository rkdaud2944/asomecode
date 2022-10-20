### AsomeCODE.Version: clock.py=2 :End.


from machine import *

def set(datetime):
	try:
		RTC().datetime(datetime)
    except:
        pass

def datetime(y, m, d, h, n, s):
	RTC().datetime( (y, m, d, 0, h, n, s, 0) )

def year():
	return RTC().datetime()[0]
	
def month():
	return RTC().datetime()[1]
	
def day():
	return RTC().datetime()[2]
	
def week():
	week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	current = RTC().datetime()
	return week_text[ current[3] ]
	
def hour():
	return RTC().datetime()[4]

def minute():
	return RTC().datetime()[5]
	
def second():
	return RTC().datetime()[6]

def millis():
	return RTC().datetime()[7]

def text():	
	week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
	current = RTC().datetime()
	return "%d.%d.%d (%s) %d:%d:%d" % (current[0], current[1], current[2], week_text[current[3]], current[4], current[5], current[6])