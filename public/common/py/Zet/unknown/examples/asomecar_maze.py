import asomecar
import udp_socket

asomecar.ready(1, 2, 7, 8)

asomecar.forward_fasts = (80,  65,  80,  65)
asomecar.backward_fasts = (65,  80,  65,  80)

asomecar.forward_fast = 75
asomecar.backward_fast = 68

s1 = InputPin(5)
s2 = InputPin(6)

s = udp_socket.Server()
s.open(1234)

line_tracing = False
old_direction = ""

while True:
	msg = s.read_text()

	if msg == 'H':
		line_tracing = False
		asomecar.stop()
	if msg == 'F':
		asomecar.forward()
	if msg == 'B':
		asomecar.backward()
	if msg == 'L':
		asomecar.turn_left()
	if msg == 'R':
		asomecar.turn_right()
	if msg == '12':
		old_direction = ""
		line_tracing = True
		asomecar.forward()

	if line_tracing:
		direction = "%d%d" % (s1.value(), s2.value())
		if direction != old_direction:
			if direction == "10":
				asomecar.to_left()
			elif direction == "01":
				asomecar.to_right()
			else:
				asomecar.forward()
			old_direction = direction