import interval
import button
import tm1637
import clock
import dht11
import internet

turnoff_pins()

timer = interval.create(100)

led_index = 0
leds = [OutputPin(7), OutputPin(8), OutputPin(12)]

bt1 = button.create(2)
bt2 = button.create(6)

tm1637.open(3, 4)

dh = dht11.create(5)

clock.set( internet.get_time(@@NOW) )   

def do_clock():
	display_dot = clock.millis() > 500
	tm1637.time(clock.hour(), clock.minute(), display_dot)

def do_thermometer():
	dh.measure()
	tm1637.number(dh.temperature())

def do_humidity():
	dh.measure()
	tm1637.number(dh.humidity())

def zero_count():
	count = 100
	running = True
	while True:
		if running:
			count = count - 1
		tm1637.number(count)
		if count <= 0:
			running = False
		if bt2.is_clicked():
			running = not running
			if running:
				count = 100
		if bt1.value() == 0:
			break

while True:
	if bt1.is_clicked():
		led_index = led_index + 1
		if led_index > 3:
			led_index = 0
		print(led_index)

	for i in range(3):
		leds[i].off()

	if led_index > 0:
		leds[led_index-1].on()

	if not timer.is_active():
		continue

	if led_index == 0:
		do_clock()

	if led_index == 1:
		do_thermometer()

	if led_index == 2:
		do_humidity()

	if led_index == 3:
		zero_count()