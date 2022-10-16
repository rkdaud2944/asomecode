from boot import *
from machine import *
from time import *


class IR_Receiver:
    def __init__(self, pin):
        self.recv = Pin(pin_map[pin], Pin.IN, Pin.PULL_UP)
        self.buffer = [0 for x in range(100)]
        self.bin = 0
        self.length = 0
        self.prev_irq = 0
        self.value = 0

    def _handler(self, source):
        self.time = ticks_us()
        if self.prev_irq == 0:
            self.prev_irq = self.time
            self.length = 0
            return
        self.buffer[self.length] = ticks_diff(self.time, self.prev_irq)
        self.prev_irq = self.time
        self.length += 1

    def scan(self):
        self.length = 0
        self.prev_irq = 0
        for x in range(len(self.buffer)):
            self.buffer[x] = 0
        self.recv.irq(trigger=Pin.IRQ_RISING | Pin.IRQ_FALLING, handler=self._handler)
        while True:
            sleep_ms(200)
            if ticks_diff(ticks_us(), self.prev_irq) > 200000 and self.length > 0:
                self.value = self.decode()
                # print('DECODED = [{}, length:{}] '.format(self.value, self.length))
                self.recv.irq(trigger=0, handler=None)
                return self.value, self.buffer, self.length

    def decode(self):
        self.bin = 0
        # m = 50000
        # for x in range(self.length):
        #     m = min(self.buffer[x], m)
        for x in range(0, self.length, 2):
            if self.buffer[x + 1] > self.buffer[x] * 3 // 2:
                self.bin += 2 ** (x // 2)
        return hex(self.bin)

    def hex_value(self):
        return self.value


class IR_Transmitter:
    def __init__(self, pin):
        self.pwm = PWM(Pin(pin_map[pin]), duty=0, freq=38000)

    def send(self, packet, length=None):
        length = length or len(packet)
        p = packet
        for x in range(length):
            if x % 2 == 0:
                self.pwm.duty(512)
            else:
                self.pwm.duty(0)
            sleep_us(p[x])
        self.pwm.duty(0)
        sleep_ms(3)

    def encode_hex(self, hx):
        hex_value = hx
        hex_arr = []

        while hex_value != 0:
            if hex_value & 0x1 == 1:
                hex_arr.append(560)
                hex_arr.append(1690)
            else:
                hex_arr.append(560)
                hex_arr.append(560)
            hex_value >>= 1
        hex_arr[0] = 9000
        hex_arr[1] = 4500
        return hex_arr

    def send_hex(self, hx):
        hex_value = hx
        hex_arr = []

        while hex_value != 0:
            if hex_value & 0x1 == 1:
                hex_arr.append(560)
                hex_arr.append(1690)
            else:
                hex_arr.append(560)
                hex_arr.append(560)
            hex_value >>= 1
        hex_arr[0] = 9000
        hex_arr[1] = 4500
        self.send(hex_arr)


def receiver(pin):
    return IR_Receiver(pin)


def transmitter(pin):
    return IR_Transmitter(pin)
