### AsomeCODE.Version: tm1637.py=8 :End.


from boot import *
from machine import *
from utime import *


SLEEP_INTERVAL = 10

_CMD_SET1 = const(64) 
_CMD_SET2 = const(192)
_CMD_SET3 = const(128)

_SEGMENTS = [63,6,91,79,102,109,125,7,127,111,119,124,57,94,121,113,0,64]

brightness = 7
clk = None
dio = None


def open(aclk, adio):
    global clk, dio

    clk = Pin(pin_map[aclk], Pin.IN)
    dio = Pin(pin_map[adio], Pin.IN)
    clk.off()
    dio.off()

def _start():
    global clk, dio
    
    dio.init(dio.OUT)
    sleep_us(SLEEP_INTERVAL)

def _stop():
    global clk, dio
    
    dio.init(dio.OUT)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.IN)
    sleep_us(SLEEP_INTERVAL)
    dio.init(dio.IN)
    sleep_us(SLEEP_INTERVAL)

def _write_comm1():
    _start()
    _write_byte(_CMD_SET1)
    _stop()

def _write_comm3():
    global brightness

    _start()
    _write_byte(_CMD_SET3 + brightness + 7)
    _stop()

def _write_byte(b):
    global clk, dio
    
    for i in range(8):
        clk.init(clk.OUT)
        sleep_us(SLEEP_INTERVAL)
        dio.init(dio.IN if b & 1 else dio.OUT)
        sleep_us(SLEEP_INTERVAL)
        clk.init(clk.IN)
        sleep_us(SLEEP_INTERVAL)
        b >>= 1
    clk.init(clk.OUT)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.IN)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.OUT)
    sleep_us(SLEEP_INTERVAL)

def set_brightness(val=None):
    global brightness
     
    if val is None:
        val = 7
    if not 0 <= val <= 7:
        val = 7
    brightness = val
    _write_comm1()
    _write_comm3()

def write(segments, pos=0):
    if not 0 <= pos <= 3:
        raise ValueError("Position out of range")
    _write_comm1()

    _start()
    _write_byte(_CMD_SET2 + pos)
    for seg in segments:
        _write_byte(seg)
    _stop()
    _write_comm3()

def encode_digit(digit):
    return _SEGMENTS[digit & 0x0f]

def encode_string(string):
    segments = bytearray(4)
    for i in range(0, min(4, len(string))):
        segments[i] = encode_char(string[i])
    return segments

def encode_char(char):
    o = ord(char)
    if o == 32:
        return _SEGMENTS[16]
    if o == 45:
        return _SEGMENTS[17]
    if o >= 65 and o <= 70:
        return _SEGMENTS[o-55]
    if o >= 97 and o <= 102:
        return _SEGMENTS[o-87]
    if o >= 48 and o <= 57:
        return _SEGMENTS[o-48]
    raise ValueError("Character out of range")

def write_str(text):
    write( encode_string(text) )

def hex(val):
    string = '{:04x}'.format(val & 0xffff)
    write(encode_string(string))

def number(num):
    num = max(-999, min(num, 9999))
    string = '{0: >4d}'.format(num)
    write(encode_string(string))

def time(num1, num2, colon=True):
    num1 = max(-9, min(num1, 99))
    num2 = max(-9, min(num2, 99))
    segments = encode_string('{0:0>2d}{1:0>2d}'.format(num1, num2))
    if colon:
        segments[1] |= 0x80
    write(segments)