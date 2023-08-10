import internet_control
import thread_socket
import thread_queue

internet_control.connect("{0}", "123456789a")
socket = thread_socket.create()
queue = thread_queue.create(16)

def on_socket_repeat():
    internet_control.update()
    if socket.is_empty():
        socket.send_text(queue.pop())

def on_socket_received(text):
    text = text.replace("'#I''D", "'#ID")
    if len(text) == 1:
        print("#UDP %s ###" % text)
    else:
        print(text)

def send_message(line):
    index = line.find("('")
    if index > -1:
        line = line[index+2:]
    index = line.find("', '")
    if index > -1:
        line = line[index+4:]
    line = line[:-2]
    socket.send_msg("192.168.4.2", 1234, line)
    socket.send_msg("192.168.4.3", 1234, line)
    socket.send_msg("192.168.4.4", 1234, line)
    socket.send_msg("192.168.4.5", 1234, line)

socket.setOnRepeat(on_socket_repeat)
socket.setOnReceived(on_socket_received)
socket.start(1234)

while True:
    line = input()
    if line == "q":
        socket.stop()
        break

    if "internet.send_msg" in line:
        send_message(line)

    queue.push(line)
