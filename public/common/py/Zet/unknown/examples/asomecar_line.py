import asomecar
import line_sensor

asomecar.ready(1, 2, 7, 8)
line_sensor.ready()

old_direction = None

asomecar.forward()

while True:
    direction = line_sensor.read()

    if direction == old_direction:
        continue

    if direction == line_sensor.RIGHT:
        asomecar.to_left()

    if direction == line_sensor.LEFT:
        asomecar.to_right()

    if direction >= line_sensor.BOTH:
        asomecar.forward()

    old_direction = direction