### AsomeCODE.Version: udp_socket.py=11 :End.


import socket
import os
import errno


class Server(object):

    def __init__(self):
        self.s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.s.setblocking(False)

    def open(self, port):
        self.port = port
        self.s.bind(('', port))

    def read(self):
        try:
            msg, addr = self.s.recvfrom(512)
        except:
            msg = None
            addr = None
        return (msg, addr)

    def read_text(self):
        msg, addr = self.read()
        if msg != None:
            return msg.decode()
        else:
            return None

    def send(self, host, port, packet):
        try:
            self.s.sendto(packet, (host, port))
        except:
            pass

    def send_text(self, host, port, packet):
        try:
            self.s.sendto(packet.encode(), (host, port))
        except:
            pass


def create():
    return Server()


sck_ = None

def open(port):
    global sck_
    sck_ = Server()
    sck_.open(port)

def read_text():
    msg = sck_.read_text()
    if msg:
       print('#UDP ' + msg + '  ###')
    return msg

def send_text(host, port, packet):
    sck_.send_text(host, port, packet)