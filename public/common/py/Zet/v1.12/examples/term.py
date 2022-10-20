

skt.send_text("192.168.123.103", 1124, "hi")


---------------------------------------------------------


import internet
import udp_socket
import uos
import io

# internet.connect("U+NetF415", "1C63014460")

skt = udp_socket.create()
skt.open(1124)

class Term(io.IOBase):

    def __init__(self):
        pass

    def readinto(self, b):
        skt.send_text("192.168.123.103", 1124, "hi")
        return len(b)
    
    def write(self, data):
        try:
            skt.send_text("192.168.123.103", 1124, data)
        except:
            pass

uos.dupterm(Term())
# uos.dupterm_notify("hi")
