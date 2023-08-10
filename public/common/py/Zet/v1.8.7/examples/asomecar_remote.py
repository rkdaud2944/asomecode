import asomecar
import udp_socket
import line_sensor

asomecar.ready(1, 2, 7, 8)

line_sensor.ready()

s = udp_socket.Server()
s.open(1234)

line_tracing = False
old_direction = 0

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
