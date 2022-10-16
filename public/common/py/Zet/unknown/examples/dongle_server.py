import open_ap
import udp_socket
import asomebot
import hcsr04

open_ap.open()

asomebot.ready(5, 6, 7, 8)
hcsr04.open(3, 2)

port = 1234
sck = udp_socket.create()
sck.open(port)

count = 0
old_index = -1
old_addr = None
old_id = None
old_data = None

while True:
    try:
        if count >= 300:
            count = 0
            sck.send(old_addr, port, old_id)
            sck.send(old_addr, port, old_data)
        count = count + 1
    except Exception as e:
        print("Error", e)

    (data, addr) = sck.read()
    if data != None:
        try:
            old_addr = addr[0]
            old_data = data
            count = 300

            data = data.decode().split('\n')
            print(data)

            if data[1].find("#I"):
                old_id = data

            if data[0] != old_index:
                old_index = data[0]
                exec(data[1])
                sck.send(old_addr, port, "#DT %d ###" % hcsr04.get_distance())
        except Exception as e:
            print("Error", e)
