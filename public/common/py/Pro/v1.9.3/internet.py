### AsomeCODE.Version: internet.py=6 :End.


from network import *
import socket


def connect(ssid, password):
    ap = WLAN(AP_IF)
    ap.active(False)

    net = WLAN(STA_IF)
    net.active(True)

    net.connect(ssid, password)
    print('network config:', net.ifconfig())

def ifconfig():
    net = WLAN(STA_IF)
    return net.ifconfig()

def open_ap(ssid, pw=None):
    sta_if = WLAN(STA_IF)
    sta_if.active(False)

    ap = WLAN(AP_IF)

    if pw == None:
        ap.config(essid=ssid, authmode=AUTH_OPEN)
    else:
        ap.config(essid=ssid, authmode=AUTH_WPA_WPA2_PSK, password=pw)

    ap.active(True)
    print('network config:', ap.ifconfig())

def get_http(url):
    try:
        _, _, host, path = url.split('/', 3)
        addr = socket.getaddrinfo(host, 80)[0][-1]
        s = socket.socket()
        s.connect(addr)
        s.send(bytes('GET /%s HTTP/1.0\r\nHost: %s\r\n\r\n' % (path, host), 'utf8'))

        while s.readline() != b'\r\n':
            pass

        result = ''

        while True:
            data = s.readline()
            if data:
                result = result + str(data, 'utf8')
            else:
                break

        s.close()

        return result
    except:
        return "Error: can't connect to the website."

def get_time(now):
    try:
        datetime = get_http("http://just-the-time.appspot.com/").split()
        d = datetime[0].split('-')
        t = datetime[1].split(':')
        return (int(d[0]), int(d[1]), int(d[2]), 0, int(t[0]) + 9, int(t[1]), int(t[2]), 0)
    except:
        return now

def send_msg(id, msg):
    url = "http://13.209.26.52/send.php?id=%s&msg=%s"
    return get_http(url % (id, msg.replace(" ", "%20")))

def get_weather(country, city):
    result = get_http("http://api.asomeblock.com/v1.0/weather.php?country=%s&city=%s" % (country, city))
    return result.split(',')