p1 = OutputPin(1)
p2 = OutputPin(2)
while True:
	p1.on()
	p2.off()
	p2.on()
	p1.off()