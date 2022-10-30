import machine
import time


class LCD(object):

	# commands
	LCD_CLEARDISPLAY = 0x01
	LCD_RETURNHOME = 0x02
	LCD_ENTRYMODESET = 0x04
	LCD_DISPLAYCONTROL = 0x08
	LCD_CURSORSHIFT = 0x10
	LCD_FUNCTIONSET = 0x20
	LCD_SETCGRAMADDR = 0x40
	LCD_SETDDRAMADDR = 0x80

	# flags for display entry mode
	LCD_ENTRYRIGHT = 0x00
	LCD_ENTRYLEFT = 0x02
	LCD_ENTRYSHIFTINCREMENT = 0x01
	LCD_ENTRYSHIFTDECREMENT = 0x00

	# flags for display on/off control
	LCD_DISPLAYON = 0x04
	LCD_DISPLAYOFF = 0x00
	LCD_CURSORON = 0x02
	LCD_CURSOROFF = 0x00
	LCD_BLINKON = 0x01
	LCD_BLINKOFF = 0x00

	# flags for display/cursor shift
	LCD_DISPLAYMOVE = 0x08
	LCD_CURSORMOVE = 0x00
	LCD_MOVERIGHT = 0x04
	LCD_MOVELEFT = 0x00

	# flags for function set
	LCD_8BITMODE = 0x10
	LCD_4BITMODE = 0x00
	LCD_2LINE = 0x08
	LCD_1LINE = 0x00
	LCD_5x10DOTS = 0x04
	LCD_5x8DOTS = 0x00

	LCD_BACKLIGHT = 0x08
	LCD_NOBACKLIGHT = 0x00

	En = 0b00000100
	Rw = 0b00000010
	Rs = 0b00000001

	def __init__(self):
		self.address = 0x27
		self.cols = 16
		self.rows = 2
		self.backlight = LCD_BACKLIGHT
		self.i2c = machine.I2C(scl=machine.Pin(pins.D5), sda=machine.Pin(pins.D7), freq=400000)

		print(self.i2c.scan())

		self.disp_func = self.LCD_4BITMODE | self.LCD_1LINE | LCD_5x8DOTS
		self.disp_func =| self.LCD_2LINE

		# wait for display init after power-on
		time.sleep_ms(50)

		expanderWrite(self.backlight)
		time.sleep_ms(1000)

	def expanderWrite(self, data):
		i2c.start()
		printIIC((int)(_data) | _backlightval)
		i2c.stop()

	def cmd(self, command):
		assert command >= 0 and command < 256
		command = bytearray([command])
		self.i2c.writeto_mem(self.address, 0x80, bytearray([]))
		self.i2c.writeto_mem(self.address, 0x80, command)

	def display(self, state):
		if state:
			self.disp_ctrl |= self.LCD_DISPLAYON
			self.cmd(self.LCD_DISPLAYCONTROL | disp_ctrl)
		else:
			self.disp_ctrl &= ~self.LCD_DISPLAYON
			self.cmd(self.LCD_DISPLAYCONTROL | disp_ctrl)

	def clear(self):
		self.cmd(self.LCD_CLEARDISPLAY)
		time.sleep_ms(2) # 2ms

	def write_char(self, c):
		assert c >= 0 and c < 256
		c = bytearray([c])
		self.i2c.writeto_mem(self.address, 0x40, c)

	def write(self, text):
		for char in text:
			self.write_char(ord(char))

	def blink(self, state):
		if state:
			self.disp_ctrl |= self.LCD_BLINKON
			self.cmd(self.LCD_DISPLAYCONTROL  | self.disp_ctrl)
		else:
			self.disp_ctrl &= ~self.LCD_BLINKON
			self.cmd(self.LCD_DISPLAYCONTROL  | self.disp_ctrl)

lcd = LCD()
lcd.write('Hi')
lcd.blink(True)