# open_ap.py

import network

def open():
    sta_if = network.WLAN(network.STA_IF)
    sta_if.active(False)
    ap = network.WLAN(network.AP_IF)
    ap.config(essid="{0}", authmode=network.AUTH_WPA_WPA2_PSK, password="123456789a")
    ap.active(True)
    sta_if = None
    ap = None