# internet_control.py

from boot import *
import internet

led = None

def connect(ssid, pw, pin=4):
    global led

    internet.connect(ssid, pw)
    led = OutputPin(pin)

def update():
    ip = internet.ifconfig()
    if ip[0] != '0.0.0.0':
        if led.value() == 0:
            print("turned on")
        led.on()
    else:
        if led.value() == 1:
            print("turned off")
        led.off() 