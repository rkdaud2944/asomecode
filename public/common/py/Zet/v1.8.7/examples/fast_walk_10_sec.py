import asomebot
import interval

asomebot.ready(5, 6, 7, 8)
asomebot.home()

timer = interval.create(10 * 1000)

while True:
	asomebot.forward_fast()
	if timer.is_active():
		break