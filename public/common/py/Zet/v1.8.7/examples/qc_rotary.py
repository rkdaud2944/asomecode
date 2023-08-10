import tm1637
import rotary
import button

tm1637.open(5, 6)
encoder = rotary.create(2, 3)
bt = button.create(1)

while True:
	encoder.update()
	if bt.is_clicked():
		encoder.set(100)
	tm1637.number( encoder.value() )