import internet_control
import udp_socket
import interval

internet_control.connect("Ryu", "123456789a")

port = 1124

sck = udp_socket.create()
sck.open(port)

timer1 = interval.create(20)
timer2 = interval.create(1000)

count_send = 0
count_recv = 0
count_error = 0

line = "abcdefghijklmnopqrstuvwxyz 0123456789 abcdefghijklmnopqrstuvwxyz 0123456789" 

while True:
    internet_control.update()

    data = sck.read_text()
    if data:
        count_recv = count_recv + 1
        if data != line:
            count_error = count_error + 1

    if timer1.is_active():
        count_send = count_send + 1
        sck.send_text('192.168.4.1', port, line) 

    if timer2.is_active():
        print(count_error, (count_send - count_recv), count_send, count_recv)

