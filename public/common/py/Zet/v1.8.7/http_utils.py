### AsomeCODE.Version: http_utils.py=12 :End.


from socket import *


class WebServer:
	def __init__(self):
		self.socket = None
		self.OnReceived = None

	def __del__(self):
		if (self.socket != None):
			self.socket.close()
			self.socket = None

	def start(self):
		html = "<!DOCTYPE html><html><head><title>Web Server</title></head><body>Ok!</body></html>"

		addr = getaddrinfo('0.0.0.0', 80)[0][-1]

		self.socket = socket()
		self.socket.bind(addr)
		self.socket.listen(1)

		print('listening on', addr)
		while True:
			cl, addr = self.socket.accept()
			print('client connected from', addr)
			cl_file = cl.makefile('rwb', 0)
			while True:
				line = cl_file.readline()
				if not line or line == b'\r\n':
					break
				if line[0:3] == b'GET':
					cmds = line.decode().split()
					if self.OnReceived != None:
						self.OnReceived(cmds[1])
			cl.send(html)
			cl.close()

			if (self.socket == None):
				return

	def stop(self):
		if (self.socket != None):
			self.socket.close()
			self.socket = None

	def setOnReceived(self, event_handler):
		self.OnReceived = event_handler

def create_webserver():
	return WebServer()

def get(url):
	try:
		_, _, host, path = url.split('/', 3)
		addr = getaddrinfo(host, 80)[0][-1]
		s = socket()
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
		datetime = get("http://just-the-time.appspot.com/").split()
		d = datetime[0].split('-')
		t = datetime[1].split(':')
		return (int(d[0]), int(d[1]), int(d[2]), 0, int(t[0]) + 9, int(t[1]), int(t[2]), 0)
	except:
		return now

def send_msg(id, msg):
	url = "http://13.209.26.52/send.php?id=%s&msg=%s"
	return get(url % (id, msg.replace(" ", "%20")))