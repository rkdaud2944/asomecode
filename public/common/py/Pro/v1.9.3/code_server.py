import udp_socket

s = udp_socket.create()
s.open(1124)

while True:
    packet = s.read()
    if packet:
        print(packet)
        s.send(packet[1][0], packet[1][1], packet[0]) 