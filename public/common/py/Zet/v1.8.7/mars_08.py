### AsomeCODE.Version: mars_08.py=1 :End.

def show():
	print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_08/')")
	input()

def check_fruits(temperature, humidity):
	print("### System.Line.RunJS: check_fruits({} , {})".format(temperature, humidity))

def get_temperature(temperature):
	print("### System.Line.RunJS: get_temperature({})".format(temperature))

def get_humidity(humidity):
	print("### System.Line.RunJS: get_humidity({})".format(humidity))

def heater_on(temperature):
	print("### System.Line.RunJS: heater_on({})".format(temperature))

def heater_off(temperature):
	print("### System.Line.RunJS: heater_off({})".format(temperature))

def water_pump_on(humidity):
	print("### System.Line.RunJS: water_pump_on({})".format(humidity))

def water_pump_off(humidity):
	print("### System.Line.RunJS: water_pump_off({})".format(humidity))

# import mars_08

# mars_08.show()

# temperature = 10
# humidity = 30

# for _ in range(30):
# 	mars_08.check_fruits(temperature, humidity)
# 	mars_08.get_temperature(temperature)
# 	mars_08.get_humidity(humidity)

# 	heat = random(5)
# 	water = random(25)
# 	dry = random(5)

#     if temperature < 25:
#         temperature = temperature + heat
#         mars_08.heater_on(temperature)
#     else:
#         temperature = temperature - heat
#         mars_08.heater_off(temperature)
        
#     if humidity < 50:
#         humidity = humidity + water
#         mars_08.water_pump_on(humidity)
#     else:
#         humidity = humidity - dry
#         mars_08.water_pump_off(humidity)

#     delay(1)