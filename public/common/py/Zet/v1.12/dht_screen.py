### AsomeCODE.Version: dht_screen.py=3 :End.


old_temperature = -1
old_humidity = -1

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=dht_screen/')")
	input()

def display(temperature, humidity):
	global old_temperature, old_humidity

	if (temperature == old_temperature) and (humidity == old_humidity):
		return

	old_temperature = temperature
	old_humidity = humidity

	print("### System.Line.RunJS: dht_display(%d, %d)" % (temperature, humidity))