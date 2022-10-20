### AsomeCODE.Version: tcp_socket.py=2 :End.


import socket
import os
import errno


class Server(object):

	def open(self, port):
		self.client = None

		addr = socket.getaddrinfo('0.0.0.0', port)[0][-1]

		self.tcp = socket.socket()
		self.tcp.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
		self.tcp.settimeout(0)
		self.tcp.bind(addr)
		self.tcp.listen(16)

	def close(self):
		self.client[0].close()
		self.client = None

	def is_active(self):
		return self.client != None

	def accept_client(self):
		try:
			cl, addr = self.tcp.accept()
			cl.setblocking(False)
			print('client connected from', addr)
			return (cl, cl.makefile('rwb', 0))
		except:
			return None

	def check_for_new_client(self):
		temp = self.accept_client()
		if temp != None:
			try:
				if self.client != None: self.client[0].close()
				self.client = temp
			except:
				pass

	def readline(self):
		try:
			packet = self.client[1].readline()
			if packet: packet = packet.decode()
			return packet
		except:
			return None			

	def send(self, packet):
		self.client[1].write(packet)

def create_server():
	return Server()