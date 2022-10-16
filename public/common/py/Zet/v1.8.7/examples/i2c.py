import machine
from array import array

i2c = machine.I2C(scl=machine.Pin(pin_map[3]), sda=machine.Pin(pin_map[4]))
print(i2c.scan()) 

address = 119
resolution = 8
i2c.writeto_mem(address, 0x6B, b'x80')
i2c.writeto_mem(address, 0x37, b'x02')
i2c.writeto_mem(address, 0x6A, b'x00')

data = array('B', [0]*6)
i2c.readfrom_mem_into(address, 0x03, data)

print(data)
