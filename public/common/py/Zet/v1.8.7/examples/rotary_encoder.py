import rotary

old = -999
encoder = rotary.create(7, 8)

while True:
	value = encoder.value()
	if value != old:
		old = value
		print(value)