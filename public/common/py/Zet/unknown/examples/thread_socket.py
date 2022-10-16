# thread_socket.py

import udp_socket
import _thread


class ThreadSocket:
    def __init__(self):
        self.lock = _thread.allocate_lock()
        self.index = 0
        self.started = False
        self.port = 0
        self.count = 0
        self.text = None
        self.OnRepeat = None
        self.OnReceived = None
        self.sck = udp_socket.create()

    def start(self, port):
        self.started = True
        self.port = port
        self.sck.open(port)
        _thread.start_new_thread(self.repeat, ())

    def stop(self):
        self.started = False

    def send_msg(self, ahost, aport, atext):
        self.lock.acquire()
        try:
            self.sck.send_text(ahost, aport, atext)
        finally:
            self.lock.release()

    def repeat(self):
        while self.started == True:
            text = self.sck.read_text()
            if text:
                if self.OnReceived:
                    self.OnReceived(text)
                if self.text and (self.text.find(text) == 0):
                    self.text = None

            if self.OnRepeat:
                self.OnRepeat()

            if self.text:
                self.count = self.count + 1
                if self.count >= 1000:
                    self.count = 0
                    self.send_msg("192.168.4.1", self.port, self.text)

    def send_text(self, text):
        if text:
            self.count = 0
            self.index = (self.index + 1) % 1000
            self.text = "%d\n%s" % (self.index, text)
            self.send_msg("192.168.4.1", self.port, self.text)

    def is_empty(self):
        return self.text == None

    def setOnRepeat(self, handler):
        self.OnRepeat = handler

    def setOnReceived(self, handler):
        self.OnReceived = handler


def create():
    return ThreadSocket()
