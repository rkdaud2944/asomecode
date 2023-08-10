var extensionId = "ailmkijlaoejbdbndhbdhbeioehiadol";

function stopUpdate(){
	updateWhether = false;
}

function asomecode_boardVersion() {
	var code = "import os;f = os.uname()[3];print(f);"
	chrome.runtime.sendMessage(extensionId, { message: "boardVersion", source: code },
		function(response) {
			console.log("Response :");
			console.log(response.printMsg);
			if (response.loop == "Y") {
				asomecode_boardVersion();
			};
			var boardVer = response.printMsg
			switch (boardVer) {
				case 'v1.12-35-g10709846f on 2019-12-29':
					updatePro();
					break;
				case 'v1.12 on 2019-12-20':
					updateZet112();
					break;
				case '>>> ':
					console.log('보드 버전 재확인')
					asomecode_boardVersion()
					break;
		}
	})
}

function asomecode_update(code) {
	console.log(code)
	chrome.runtime.sendMessage(extensionId, {message: "update", source: code},
	function (response) {
	});
}

function update(){
	updateWhether = true;
	asomecode_boardVersion()
}

async function updateZet112() {
	if (updateWhether == true) {
		update_code(asomebot);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(asomebot_align);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(asomecar);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(boot);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(button);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(cannon);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(car_race);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(clock);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(controller);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(dht_screen);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(dht11);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(dice);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(disk);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(door);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(flag_game);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(fonts);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(hcsr04);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(http_utils);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(internet);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(interval);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(line_sensor);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(lunar_lander);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_01);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_02);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_03);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_04);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_05);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_06);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_07);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_08);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_09);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_10);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_11);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_12);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_13);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(mars_3d);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(maze);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(maze_maker);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(max7219);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(motion_detect);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(music);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(music_player);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(notes);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(rotary);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(scheduler);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(sliding_puzzle);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(sound_effect);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(spacecraft);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(stove);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(tcp_socket);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(telnet_server);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(timer);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(tm1637);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(udp_socket);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(vibration_sensor);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		run_text('import machine; machine.reset()');
		alert("업데이트 완료");
	}
}

async function updatePro() {
	if (updateWhether == true) {
		update_code(asomebot_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(asomebot_align);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(asomecar_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(boot_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(button);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(cannon);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(car_race);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(clock_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(dht_screen);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(dht11);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(dice);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(disk);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(door);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(flag_game);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(fonts);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(hcsr04);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(http_utils);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(internet_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(interval);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(line_sensor_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(lunar_lander);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(maze);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(maze_maker);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(max7219_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(motion_detect);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(music_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(music_player);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(rotary);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(scheduler);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(sliding_puzzle);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(soil_sensor)
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(sound_effect);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(spacecraft);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(stove_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(tcp_socket);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(telnet_server);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(timer);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(tm1637_pro);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(udp_socket);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(vibration_sensor);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		update_code(water_sensor);
	}
	await sleep(1.5);
	if (updateWhether == true) {
		run_text('import machine; machine.reset()');
		alert("업데이트 완료");
	}
}

function sleep(sec) {
  return new Promise(resolve => setTimeout(resolve, sec * 1000));
}

function update_code(pyCode) {
	var variableName = pyCode.split('.');
	var variableNameSplit = variableName[1];
	var pass = variableNameSplit.split(': ');
	var fileName = pass[1];
	var code = `f = open('${fileName}.py','w')
f.write(`
	var replace = pyCode.replaceAll('"', '\\"');
	var arr = replace.split('\n');
	for(i=0; i<arr.length; i++){
		if(i==arr.length-1){
			code = code +`"`+arr[i]+`")\nf.close()\n`;
		}else{		
			code = code +`"`+arr[i]+`\\n"\n`;
		}
	}
	run_update(code);
}

var asomebot = `### AsomeCODE.Version: asomebot.py=48 :End.


from boot import *
from asomebot_align import *
from machine import *
from utime import *

w0 = 0.008
w1 = 0.03
w2 = 0.1
w3 = 0.2
w4 = 0.3

servos = []
old_angles = [-1, -1, -1, -1]

def ready(pin1, pin2, pin3, pin4):
    global servos
    servos = []
    pins = (pin1, pin2, pin3, pin4)
    for i in range(4): servos.append(PWM(Pin(pin_map[pins[i]], Pin.OUT), 300, 0))

def align(b0, b1, b2, b3):
    global base
    base = (b0, b1, b2, b3)

def angle(n,d):
    if d != old_angles[n]: servos[n].duty( 620 * d // 180 + 120 )
    old_angles[n] = d

def angles(n,d,w=0):
    size = len(n)

    if w > 0:
        start = ticks_ms()
        while True:
            current = ticks_ms()
            if current < start:
                break

            term = current - start
            if term > w:
                break

            ratio = term / w
            
            for i in range(size): 
                index = n[i]
                diff = (base[index] + d[i] - old_angles[index]) * ratio
                a = old_angles[index] + int(diff)
                servos[index].duty( 620 * a // 180 + 120 )

            delay(w1)

    for i in range(size): angle(n[i], base[n[i]] + d[i])

def turn_off():
    for servo in servos:
        servo.duty(0)
        servo.deinit()

def home():
    for i in range(4): 
        servos[i].duty( 620 * base[i] // 180 + 120 )
        old_angles[i] = base[i]
    delay(w4)

def leg_up(d=1, a1=60, a2=25):
    if d == 1:
        angle(2, base[2] - a1)
        angles([3], [-a2], 300)
    else:
        angle(3, base[3] + a1)
        angles([2], [a2], 300)

temp_walk = 0

def walk(d, a1, a2, a3, m, s1, s2):
    angles((3, 2), (-a1, -a2), s1)
    angles((0, 1), (-a3 * d, -a3 * d), s2)
    angles((2, 3), (0, 0), s1)

    if m <= 0:
        angles((2, 3), (a1, a2+m), s1)
    else:
        angles((2, 3), (a1-m, a2), s1)
    angles((0, 1), (a3 * d, a3 * d), s2)
    angles((2, 3), (0, 0), s1)
    
def forward(a1=20, a2=40, a3=20, m=0, s1=150, s2=300):
    walk(1, a1, a2, a3, m, s1, s2)

def backward(a1=20, a2=40, a3=20, m=0, s1=150, s2=300):
    walk(-1, a1, a2, a3, m, s1, s2)

def turn(d, a1, a2, a3, s):
    angles((2, 3), (-a1, -a2), s)
    delay(w4)
    
    a = 1
    if d == 1: a = 0

    angles([a], [-a3], s)
    delay(w4)

    angles( (2, 3), (0, 0), s)
    delay(w2)
    
    angles((3, 2), (a1, a2), s)
    delay(w4)

    angles([0, 1], [0, 0], s)
    delay(w2)

    angles( (2, 3), (0, 0), s)
    delay(w2)
    
def turn_left(a1=60, a2=30, a3=25, s=300):
    turn(1, a1, a2, a3, s)

def turn_right(a1=60, a2=30, a3=25, s=300):
    turn(-1, a1, a2, a3, s)

def foot_wave(d=1):
    no = 3
    if d == -1: no = 2
    b = base[no]
    for i in range(10):
        a = ((i % 3) - 1) * 20
        angle(no, b + a * d)
        delay(w3)

def mouse(d=1, a1=70, a2=30):
    leg_up(d, a1, a2)
    foot_wave(-d)

def flap():
    angles( (3, 2), (30, -30), 0.15)
    delay(0.15)
    angles( (3, 2), (-30, +30), 0.15)
    delay(0.15)
    
def warigari(w=0.2, a=45):
    angles( (0, 1), (-a, -a) ) 
    delay(w)
    angles( (0, 1), (a, a) )
    delay(w)

def tock(d=1, a=20):
    no = 2
    if d == -1: no = 3
    b = base[3]
    angle(no, b + a * d)
    delay(0.17)
    angle(no, b)
    delay(0.17)

def tick_tock():
    angle(0, base[0] - 45)
    delay(w3)
    angle(2, base[2] - 20)
    delay(w3)
    angle(2, base[2] + 30)
    delay(w3)

def wiggle():
    angles( (2, 3), (-30, -15) )
    delay(w3)
    angles( (2, 3), (0, 0) )
    delay(w3)
    angles( (2, 3), (30, 15) )
    delay(w3)
    angles( (2, 3), (0, 0) )
    delay(w3)
    
def ballet(a1=-40, a2=40):
    angles( (2, 3),  (a1, a2) )
    delay(1)
            
def left_swing():
    angles( (0, 2),  (-45, 45) )
    delay(w4)

def right_swing():
    angles( (1, 3),  (45, -45) )
    delay(w4)

def yaho():
    angles( (2, 3),  (50, -50) )
    delay(w4)

def swing():
    angle(2, base[2] - 60)
    delay(w3)
    angle(2, base[2])
    delay(w3)
    angle(3, base[3] + 60)
    delay(w3)
    angle(3, base[3])
    delay(w3)
    
def moonwalk():
    a2 = base[2]
    a3 = base[3] + 10
    for i in range(12):
        a3 = a3 + 2
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 - 2
        a3 = a3 + 2
        angle(2, a2)
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 - 2
        a3 = a3 - 2
        angle(2, a2)
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 + 2
        a3 = a3 - 2
        angle(2, a2)
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 + 2
        angle(2, a2)
        delay(w1)
    home()
 `
 
var asomebot_align = `### AsomeCODE.Version: asomebot_align.py=1 :End.
base = (90, 90, 90, 90)
`

var asomecar = `### AsomeCODE.Version: asomecar.py=15 :End.


from boot import *


forward_fast = 140
forward_slow = 80
backward_fast = 1
backward_slow = 68

forward_fasts  = (140,   1, 140,   1)
backward_fasts = (  1, 140,   1, 140)
forward_slows  = ( 75,  65,  75,  65)
backward_slows = ( 65,  75,  65,  75)


servos = []


def ready(pin1, pin2, pin3, pin4):
    global servos
    servos = []
    servos.append( ServoPin(pin1) ) 
    servos.append( ServoPin(pin2) )
    servos.append( ServoPin(pin3) )
    servos.append( ServoPin(pin4) )

def stop():
    for servo in servos:
        servo.duty(0)

def move(s1, s2, s3, s4):
    servos[0].duty(s1)
    servos[1].duty(s2)
    servos[2].duty(s3)
    servos[3].duty(s4)

def forward(speed = forward_fasts):
    for i in range(4):
        servos[i].duty(speed[i])
        
def backward(speed = backward_fasts):
    for i in range(4):
        servos[i].duty(speed[i])
        
def turn_left(speed = backward_fast):
    for servo in servos:
        servo.duty(speed)
        
def turn_right(speed = forward_fast):
    for servo in servos:
        servo.duty(speed)

def to_left(speed = backward_slow):
    servos[0].duty(0)
    servos[2].duty(0)
    servos[1].duty(speed)
    servos[3].duty(speed)

def to_right(speed = forward_slow):
    servos[1].duty(0)
    servos[3].duty(0)
    servos[0].duty(speed)
    servos[2].duty(speed)
`

var boot = `### AsomeCODE.Version: boot.py=32 :End.


from machine import *
from utime import *
from urandom import *

pin_map = (16, 05, 04, 00, 02, 14, 12, 13, 15, 3, 1, 9, 10)

class ServoDevice:
    def __init__(self, no):
        self.no = no
        self.pin = PWM(Pin(pin_map[no], Pin.OUT), 50, 0)

    def duty(self, value):
        self.pin.duty( int(value) )

    def off(self):
        self.pin.duty(0)

    def angle(self, value):
        segments = ( 1, 45, 61, 85, 108, 140)
        weights  = (44, 16, 24, 21,  32,  32)
        temp = value / 45
        index = int(temp)
        if index < 0: index = 0
        if index > 5: index = 5
        offset = value - (index * 45)
        self.pin.duty( segments[index] + int(weights[index] * offset / 45) )

def random(n):
    seed( ticks_us() )
    return getrandbits(32) % n

def delay(t):
    sleep(t)

def DigitalPin(no):
    return Pin(pin_map[no])

def OutputPin(no):
    return Pin(pin_map[no], Pin.OUT)

def InputPin(no):
    return Pin(pin_map[no], Pin.IN)

def InputPullUp(no):
    return Pin(pin_map[no], Pin.IN, Pin.PULL_UP)

def AnalogPin():
    return ADC(0)

def ServoPin(no):
    return ServoDevice(no)

def turnoff_pins(pins = (1, 2, 3, 4, 5, 6, 7, 8, 12)):
    for i in range(len(pins)):
        if pins[i] != 12:
            pin = PWM(Pin(pin_map[pins[i]], Pin.OUT), 50, 0)
            pin.deinit() 
        pin = OutputPin(pins[i])
        pin.off() 

freq(160000000)
print('### System.Started')
`

var button = `### AsomeCODE.Version: button.py=4 :End.


from boot import *
from machine import *
from utime import *


class Button(object):

    def __init__(self, pin):
        self.button = InputPullUp(pin)
        self.handler = None
        self.old_state = 1
        self.old_is_clicked = 0
        self.old_OnClick = 0
        self.interval = 100

        self.button.irq(trigger=Pin.IRQ_FALLING, handler=self.do_click)

    def value(self):
        return self.button.value()

    def is_clicked(self):
        state = self.button.value()
        is_condition = (self.old_state == 1) and (state == 0)
        self.old_state = state

        if not is_condition:
            return False

        tick = ticks_ms()

        if (self.old_is_clicked != 0) and ((tick-self.old_is_clicked) < self.interval):
            return False

        self.old_is_clicked = tick

        return True

    def do_click(self, value):
        tick = ticks_ms()

        if (self.old_OnClick != 0) and ((tick-self.old_OnClick) < self.interval):
            return

        if self.handler != None:
            self.old_OnClick = tick
            self.handler()


    def setOnClick(self, value):
        self.handler = value


def create(pin):
    return Button(pin)
`

var cannon = `### AsomeCODE.Version: cannon.py=3 :End.


import math


angle_ = 0
power_ = 0

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=cannon/')")

def set_angle(a):
    global angle_
    angle_ = a
    print('### System.Line.RunJS: cannon_angle(%d)' % (a))

def set_power(p):
    global power_
    power_ = p
    print('### System.Line.RunJS: cannon_power(%d)' % (p))

def power_x():
    return round(math.cos(angle_ * math.pi / 180) * power_)

def power_y():
    return round(math.sin(angle_ * math.pi / 180) * power_) * -1

def bullet_moveto(x, y):
    print('### System.Line.RunJS: bullet_moveto(%d, %d)' % (x, y))

def target_moveto(x):
    print('### System.Line.RunJS: target_moveto(%d)' % (x))

def fire():
    print('### System.Line.RunJS: cannon_fire()')

def target_explode():
    print('### System.Line.RunJS: target_explode()')
`

var car_race = `### AsomeCODE.Version: car_race.py=4 :End.


position = 0

def show():
    global position
    position = 0
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=car_race/')")

def show_time(time):
    print('### System.Line.RunJS: show_time(%s)' % time)

def start():
    global position
    position = 0
    print('### System.Line.RunJS: car_start()')

def move(count):
    global position
    if count <= 0: return
    position = position + count
    print('### System.Line.RunJS: car_move(%d)' % position)

def is_finished():
    global position
    return position > 990
`

var clock = `### AsomeCODE.Version: clock.py=2 :End.


from machine import *

def set(datetime):
    try:
        RTC().datetime(datetime)
    except:
        pass

def datetime(y, m, d, h, n, s):
    RTC().datetime( (y, m, d, 0, h, n, s, 0) )

def year():
    return RTC().datetime()[0]
    
def month():
    return RTC().datetime()[1]
    
def day():
    return RTC().datetime()[2]
    
def week():
    week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    current = RTC().datetime()
    return week_text[ current[3] ]
    
def hour():
    return RTC().datetime()[4]

def minute():
    return RTC().datetime()[5]
    
def second():
    return RTC().datetime()[6]

def millis():
    return RTC().datetime()[7]

def text():    
    week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    current = RTC().datetime()
    return '%d.%d.%d (%s) %d:%d:%d' % (current[0], current[1], current[2], week_text[current[3]], current[4], current[5], current[6])
`

var controller = `### AsomeCODE.Version: controller.py=1 :End.


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=controller/')")
`

var dht_screen = `### AsomeCODE.Version: dht_screen.py=3 :End.


from boot import *


old_temperature = -1
old_humidity = -1

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=dht_screen/')")
    delay(2)

def display(temperature, humidity):
    global old_temperature, old_humidity

    if (temperature == old_temperature) and (humidity == old_humidity):
        return

    old_temperature = temperature
    old_humidity = humidity

    print('### System.Line.RunJS: dht_display(%d, %d)' % (temperature, humidity))
`

var dht11 = `### AsomeCODE.Version: dht11.py=2 :End.


from boot import *
from dht import *
from utime import *

class DHT:

    def __init__(self, pin):
        self.sensor  = DHT11(  InputPin(pin)  )
        self.last_temperature = 0
        self.last_humidity = 0
        self.count = 1000
        self.old = ticks_ms()

    def measure(self):
        now = ticks_ms()
        if now > self.old:
            self.count = self.count + (now - self.old)
        self.old = now;

        if self.count < 1000:
            return

        self.count = 0

        try:
            self.sensor.measure()
            self.last_temperature = self.sensor.temperature()
            self.last_humidity = self.sensor.humidity()
        except:
            pass

    def temperature(self):
        return self.last_temperature

    def humidity(self):
        return self.last_humidity


def create(pin):
    return DHT(pin)
`

var dice = `### AsomeCODE.Version: dice.py=3 :End.


from boot import *


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=dice/')")
    delay(2)

def roll():
    print('### System.Line.RunJS: roll_dice()')
`

var disk = `### AsomeCODE.Version: disk.py=2 :End.


import os
import gc


def list(dir = ''):
    files = os.listdir(dir)
    count = 0
    for f in files:
        if f == 'system.run.temp.py':
            continue
        count = count + 1
        print(f)
    print(count, 'file(s)')

def view(filename):
    print('### System.Start.View:', filename)
    f = open(filename)
    while True:
        line = f.readline()
        if not line:
            break
        print(line[:-1])
    f.close()
    print('### System.End.View')

def run(filename):
    gc.collect()
    f = open(filename, 'r')
    source = ''
    while True:
        line = f.read()
        if not line:
            break
        source = source + line
    f.close()
    exec(source)
`

var door = `### AsomeCODE.Version: door.py=3 :End.


from boot import *


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=door/')")
    delay(2)

def open():
    print('### System.Line.RunJS: door_open()')

def close():
    print('### System.Line.RunJS: door_close()')
`

var flag_game = `### AsomeCODE.Version: flag_game.py=3 :End.

joined = 0

def show():
    global joined
    joined = 0
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=flag_game/')")

def join(no):
    global joined
    joined = joined + no

def is_ready():
    return joined >= 3

def count_down(count):
    print("### System.Line.RunJS: gunman_ready(%d)" % count)

def win(player):
    print("### System.Line.RunJS: gunman_win(%d)" % player)
`

var fonts = `### AsomeCODE.Version: fonts.py=1 :End.


char = {}

char['!'] = [0x18, 0x3C, 0x3C, 0x18, 0x18, 0x00, 0x18, 0x00]
char['"'] = [0x6C, 0x6C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
char['#'] = [0x6C, 0x6C, 0xFE, 0x6C, 0xFE, 0x6C, 0x6C, 0x00]
char['$'] = [0x30, 0x7C, 0xC0, 0x78, 0x0C, 0xF8, 0x30, 0x00]
char['%'] = [0x00, 0xC6, 0xCC, 0x18, 0x30, 0x66, 0xC6, 0x00]
char['&'] = [0x38, 0x6C, 0x38, 0x76, 0xDC, 0xCC, 0x76, 0x00]
char["'"] = [0x60, 0x60, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00]
char['('] = [0x18, 0x30, 0x60, 0x60, 0x60, 0x30, 0x18, 0x00]
char[')'] = [0x60, 0x30, 0x18, 0x18, 0x18, 0x30, 0x60, 0x00]
char['*'] = [0x00, 0x66, 0x3C, 0xFF, 0x3C, 0x66, 0x00, 0x00]
char['+'] = [0x00, 0x30, 0x30, 0xFC, 0x30, 0x30, 0x00, 0x00]
char[','] = [0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x30, 0x60]
char['-'] = [0x00, 0x00, 0x00, 0xFC, 0x00, 0x00, 0x00, 0x00]
char['.'] = [0x00, 0x00, 0x00, 0x00, 0x00, 0x30, 0x30, 0x00]
char['/'] = [0x06, 0x0C, 0x18, 0x30, 0x60, 0xC0, 0x80, 0x00]

char['0'] = [0x7C, 0xC6, 0xCE, 0xDE, 0xF6, 0xE6, 0x7C, 0x00]
char['1'] = [0x30, 0x70, 0x30, 0x30, 0x30, 0x30, 0xFC, 0x00]
char['2'] = [0x78, 0xCC, 0x0C, 0x38, 0x60, 0xCC, 0xFC, 0x00]
char['3'] = [0x78, 0xCC, 0x0C, 0x38, 0x0C, 0xCC, 0x78, 0x00]
char['4'] = [0x1C, 0x3C, 0x6C, 0xCC, 0xFE, 0x0C, 0x1E, 0x00]
char['5'] = [0xFC, 0xC0, 0xF8, 0x0C, 0x0C, 0xCC, 0x78, 0x00]
char['6'] = [0x38, 0x60, 0xC0, 0xF8, 0xCC, 0xCC, 0x78, 0x00]
char['7'] = [0xFC, 0xCC, 0x0C, 0x18, 0x30, 0x30, 0x30, 0x00]
char['8'] = [0x78, 0xCC, 0xCC, 0x78, 0xCC, 0xCC, 0x78, 0x00]
char['9'] = [0x78, 0xCC, 0xCC, 0x7C, 0x0C, 0x18, 0x70, 0x00]

char[':'] = [0x00, 0x30, 0x30, 0x00, 0x00, 0x30, 0x30, 0x00]
char['<'] = [0x18, 0x30, 0x60, 0xC0, 0x60, 0x30, 0x18, 0x00]
char['='] = [0x00, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0x00]
char['>'] = [0x60, 0x30, 0x18, 0x0C, 0x18, 0x30, 0x60, 0x00]
char['?'] = [0x78, 0xCC, 0x0C, 0x18, 0x30, 0x00, 0x30, 0x00]
char['@'] = [0x7C, 0xC6, 0xDE, 0xDE, 0xDE, 0xC0, 0x78, 0x00]

char['A'] = [0x30, 0x78, 0xCC, 0xCC, 0xFC, 0xCC, 0xCC, 0x00]
char['B'] = [0xFC, 0x66, 0x66, 0x7C, 0x66, 0x66, 0xFC, 0x00]
char['C'] = [0x3C, 0x66, 0xC0, 0xC0, 0xC0, 0x66, 0x3C, 0x00]
char['D'] = [0xF8, 0x6C, 0x66, 0x66, 0x66, 0x6C, 0xF8, 0x00]
char['E'] = [0xFE, 0x62, 0x68, 0x78, 0x68, 0x62, 0xFE, 0x00]
char['F'] = [0xFE, 0x62, 0x68, 0x78, 0x68, 0x60, 0xF0, 0x00]
char['G'] = [0x3C, 0x66, 0xC0, 0xC0, 0xCE, 0x66, 0x3E, 0x00]
char['H'] = [0xCC, 0xCC, 0xCC, 0xFC, 0xCC, 0xCC, 0xCC, 0x00]
char['I'] = [0x78, 0x30, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00]
char['J'] = [0x1E, 0x0C, 0x0C, 0x0C, 0xCC, 0xCC, 0x78, 0x00]
char['K'] = [0xE6, 0x66, 0x6C, 0x78, 0x6C, 0x66, 0xE6, 0x00]
char['L'] = [0xF0, 0x60, 0x60, 0x60, 0x62, 0x66, 0xFE, 0x00]
char['M'] = [0xC6, 0xEE, 0xFE, 0xFE, 0xD6, 0xC6, 0xC6, 0x00]
char['N'] = [0xC6, 0xE6, 0xF6, 0xDE, 0xCE, 0xC6, 0xC6, 0x00]
char['O'] = [0x38, 0x6C, 0xC6, 0xC6, 0xC6, 0x6C, 0x38, 0x00]
char['P'] = [0xFC, 0x66, 0x66, 0x7C, 0x60, 0x60, 0xF0, 0x00]
char['Q'] = [0x78, 0xCC, 0xCC, 0xCC, 0xDC, 0x78, 0x1C, 0x00]
char['R'] = [0xFC, 0x66, 0x66, 0x7C, 0x6C, 0x66, 0xE6, 0x00]
char['S'] = [0x78, 0xCC, 0xE0, 0x70, 0x1C, 0xCC, 0x78, 0x00]
char['T'] = [0xFC, 0xB4, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00]
char['U'] = [0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0xFC, 0x00]
char['V'] = [0xCC, 0xCC, 0xCC, 0xCC, 0xCC, 0x78, 0x30, 0x00]
char['W'] = [0xC6, 0xC6, 0xC6, 0xD6, 0xFE, 0xEE, 0xC6, 0x00]
char['X'] = [0xC6, 0xC6, 0x6C, 0x38, 0x38, 0x6C, 0xC6, 0x00]
char['Y'] = [0xCC, 0xCC, 0xCC, 0x78, 0x30, 0x30, 0x78, 0x00]
char['Z'] = [0xFE, 0xC6, 0x8C, 0x18, 0x32, 0x66, 0xFE, 0x00]

char['['] = [0x78, 0x60, 0x60, 0x60, 0x60, 0x60, 0x78, 0x00]
char['\\\\\\\\'] = [0xC0, 0x60, 0x30, 0x18, 0x0C, 0x06, 0x02, 0x00]
char[']'] = [0x78, 0x18, 0x18, 0x18, 0x18, 0x18, 0x78, 0x00]
char['^'] = [0x10, 0x38, 0x6C, 0xC6, 0x00, 0x00, 0x00, 0x00]
char['_'] = [0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF]
char['`+'`'+`'] = [0x30, 0x30, 0x18, 0x00, 0x00, 0x00, 0x00, 0x00]

char['a'] = [0x00, 0x00, 0x78, 0x0C, 0x7C, 0xCC, 0x76, 0x00]
char['b'] = [0xE0, 0x60, 0x60, 0x7C, 0x66, 0x66, 0xDC, 0x00]
char['c'] = [0x00, 0x00, 0x78, 0xCC, 0xC0, 0xCC, 0x78, 0x00]
char['d'] = [0x1C, 0x0C, 0x0C, 0x7C, 0xCC, 0xCC, 0x76, 0x00]
char['e'] = [0x00, 0x00, 0x78, 0xCC, 0xFC, 0xC0, 0x78, 0x00]
char['f'] = [0x38, 0x6C, 0x60, 0xF0, 0x60, 0x60, 0xF0, 0x00]
char['g'] = [0x00, 0x00, 0x76, 0xCC, 0xCC, 0x7C, 0x0C, 0xF8]
char['h'] = [0xE0, 0x60, 0x6C, 0x76, 0x66, 0x66, 0xE6, 0x00]
char['i'] = [0x30, 0x00, 0x70, 0x30, 0x30, 0x30, 0x78, 0x00]
char['j'] = [0x0C, 0x00, 0x0C, 0x0C, 0x0C, 0xCC, 0xCC, 0x78]
char['k'] = [0xE0, 0x60, 0x66, 0x6C, 0x78, 0x6C, 0xE6, 0x00]
char['l'] = [0x70, 0x30, 0x30, 0x30, 0x30, 0x30, 0x78, 0x00]
char['m'] = [0x00, 0x00, 0xCC, 0xFE, 0xFE, 0xD6, 0xC6, 0x00]
char['n'] = [0x00, 0x00, 0xF8, 0xCC, 0xCC, 0xCC, 0xCC, 0x00]
char['o'] = [0x00, 0x00, 0x78, 0xCC, 0xCC, 0xCC, 0x78, 0x00]
char['p'] = [0x00, 0x00, 0xDC, 0x66, 0x66, 0x7C, 0x60, 0xF0]
char['q'] = [0x00, 0x00, 0x76, 0xCC, 0xCC, 0x7C, 0x0C, 0x1E]
char['r'] = [0x00, 0x00, 0xDC, 0x76, 0x66, 0x60, 0xF0, 0x00]
char['s'] = [0x00, 0x00, 0x7C, 0xC0, 0x78, 0x0C, 0xF8, 0x00]
char['t'] = [0x10, 0x30, 0x7C, 0x30, 0x30, 0x34, 0x18, 0x00]
char['u'] = [0x00, 0x00, 0xCC, 0xCC, 0xCC, 0xCC, 0x76, 0x00]
char['v'] = [0x00, 0x00, 0xCC, 0xCC, 0xCC, 0x78, 0x30, 0x00]
char['w'] = [0x00, 0x00, 0xC6, 0xD6, 0xFE, 0xFE, 0x6C, 0x00]
char['x'] = [0x00, 0x00, 0xC6, 0x6C, 0x38, 0x6C, 0xC6, 0x00]
char['y'] = [0x00, 0x00, 0xCC, 0xCC, 0xCC, 0x7C, 0x0C, 0xF8]
char['z'] = [0x00, 0x00, 0xFC, 0x98, 0x30, 0x64, 0xFC, 0x00]

char['{'] = [0x1C, 0x30, 0x30, 0xE0, 0x30, 0x30, 0x1C, 0x00]
char['|'] = [0x18, 0x18, 0x18, 0x00, 0x18, 0x18, 0x18, 0x00]
char['}'] = [0xE0, 0x30, 0x30, 0x1C, 0x30, 0x30, 0xE0, 0x00]
char['~'] = [0x76, 0xDC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00]
`

var hcsr04 = `### AsomeCODE.Version: hcsr04.py=7 :End.


from boot import *
from utime import *


trig = None
echo = None

old_tick = ticks_ms()
count = 0
cm = 0

def open(t, p):
    global trig, echo, old_tick, count, cm

    trig = OutputPin(t)
    echo = InputPin(p)
    old_tick = ticks_ms()
    count = 1000
    cm = 0

def get_distance():
    global trig, echo, old_tick, count, cm
    
    tick = ticks_ms()
    if (tick > old_tick):
            count = count + (tick - old_tick)
    old_tick = tick

    if count < 200:
        return cm

    count = 0

    trig.off()
    sleep_us(2)
    
    trig.on()
    sleep_us(10)
    trig.off()
    
    t1 = ticks_us()
    while echo.value() == 0:
        t2 = ticks_us()
        if (t2 - t1) > 1000 * 1000:
            cm = 0
            return -1

    t1 = ticks_us()
    t2 = 0
    while echo.value() == 1:
        t2 = ticks_us()
        if (t2 - t1) > 1000 * 1000:
            cm = 0
            return -2
    
    if t2 > t1:
        cm = int((t2 - t1) / 58.0)
        print('### System.Line.RunJS: hcsr04_distance(%d)' % cm)
        return cm
    else:
        cm = 0
        return 0
`

var http_utils = `### AsomeCODE.Version: http_utils.py=12 :End.


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
                if not line or line == b'\\\\r\\\n':
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
        s.send(bytes('GET /%s HTTP/1.0\\\\r\\\nHost: %s\\\\r\\\n\\\\r\\\n' % (path, host), 'utf8'))

        while s.readline() != b'\\\\r\\\n':
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
`

var internet = `### AsomeCODE.Version: internet.py=6 :End.


from network import *
import socket


def connect(ssid, password):
    ap = WLAN(AP_IF)
    ap.active(False)

    net = WLAN(STA_IF)
    net.active(True)

    net.connect(ssid, password)
    print('network config:', net.ifconfig())

def ifconfig():
    net = WLAN(STA_IF)
    return net.ifconfig()

def open_ap(ssid, pw=None):
    sta_if = WLAN(STA_IF)
    sta_if.active(False)

    ap = WLAN(AP_IF)
    ap.active(True)

    if pw == None:
        ap.config(essid=ssid, authmode=AUTH_OPEN)
    else:
        ap.config(essid=ssid, authmode=AUTH_WPA_WPA2_PSK, password=pw)

    print('network config:', ap.ifconfig())

def get_http(url):
    try:
        _, _, host, path = url.split('/', 3)
        addr = socket.getaddrinfo(host, 80)[0][-1]
        s = socket.socket()
        s.connect(addr)
        s.send(bytes('GET /%s HTTP/1.0\\\\r\\\nHost: %s\\\\r\\\n\\\\r\\\n' % (path, host), 'utf8'))

        while s.readline() != b'\\\\r\\\n':
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
        datetime = get_http('http://just-the-time.appspot.com/').split()
        d = datetime[0].split('-')
        t = datetime[1].split(':')
        return (int(d[0]), int(d[1]), int(d[2]), 0, int(t[0]) + 9, int(t[1]), int(t[2]), 0)
    except:
        return now

def send_msg(id, msg):
    url = 'http://13.209.26.52/send.php?id=%s&msg=%s'
    return get_http(url % (id, msg.replace(' ', '%20')))

def get_weather(country, city):
    result = get_http('http://api.asomeblock.com/v1.0/weather.php?country=%s&city=%s' % (country, city))
    return result.split(',')
`

var interval = `### AsomeCODE.Version: interval.py=5 :End.


from utime import *


class Interval(object):
    
    def __init__(self, capacity):
        self.capacity = capacity
        self.old_tick = ticks_ms()
        self.count = 0

    def set(self, capacity):
        self.capacity = capacity

    def get(self):
        tick = ticks_ms()
        if (tick > self.old_tick):
            term = tick - self.old_tick
        else:
            term = 0
            self.old_tick = tick
        return term

    def start(self):
        self.old_tick = ticks_ms()
        self.count = 0

    def is_active(self):
        tick = ticks_ms()
        if (tick > self.old_tick):
                self.count = self.count + (tick - self.old_tick)
        self.old_tick = tick

        if self.count >= self.capacity:
            self.count = 0
            return True

        return False

def create(capacity=0):
    return Interval(capacity)
`

var line_sensor = `### AsomeCODE.Version: line_sensor.py=4 :End.


from boot import *


LEFT = 1
RIGHT = 2
BOTH = 4
NOTHING = 8

left = None
right = None

def ready():
    global left, right
    left = InputPin(12)
    right = AnalogPin()

def read():
    result = 0
    if right.read() > 200: result = LEFT
    if left.value() == 1: result = result + RIGHT
    if result > 2: result = BOTH
    if result == 0: result = NOTHING
    return result
`

var lunar_lander = `### AsomeCODE.Version: lunar_lander.py=5 :End.


from boot import *


y = 0
speed = 0
fuel = 1000
is_engine_on = False

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=lunar_lander/')")
    delay(2)

def start():
    global y, speed, fuel, is_engine_on

    y = 0
    speed = 0
    fuel = 1000
    is_engine_on = False

    print('### System.Line.RunJS: lunar_lander_engine_off()')
    print('### System.Line.RunJS: lunar_lander_moveto(162, 0)')

def ship_move():
    global y, speed, fuel, is_engine_on
    if is_engine_on:
        fuel = fuel - 1
    y = y + speed
    print('### System.Line.RunJS: lunar_lander_moveto(162, %d)' % int(y))

def ship_down():
    global y, speed
    y = y + speed
    print('### System.Line.RunJS: lunar_lander_moveto(162, %d)' % int(y))

def ship_up():
    global y, speed
    y = y - speed
    print('### System.Line.RunJS: lunar_lander_moveto(162, %d)' % int(y))

def ship_speed_up():
    global speed
    speed = speed + 0.08

def ship_speed_down():
    global speed
    speed = speed - 0.08

def fuel_is_empty():
    global fuel
    return fuel == 0

def engine_on():
    global is_engine_on
    is_engine_on = fuel > 0
    if is_engine_on:
        ship_speed_down()
        print('### System.Line.RunJS: lunar_lander_engine_on()')
    else:
        ship_speed_up()
        print('### System.Line.RunJS: lunar_lander_engine_off()')

def engine_off():
    global is_engine_on
    is_engine_on = False
    ship_speed_up()
    print('### System.Line.RunJS: lunar_lander_engine_off()')

def is_landed():
    global y
    return y >= 215

def ship_explode():
    print('### System.Line.RunJS: lunar_lander_explode()')
`

var mars_01 = `### AsomeCODE.Version: mars_01.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_01/')")
    input()

def charge(value):
    global energy
    energy = value
    print('### System.Line.RunJS: set_gauge({})'.format(value))

def display_battery():
    print('### System.Line.RunJS: display_battery({})'.format(energy))

def display_message(msg):
    print("### System.Line.RunJS: display_message('{}')".format(msg))
`

var mars_02 = `### AsomeCODE.Version: mars_02.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_02/')")
    input()

def display_time(sec):
    sec = str(sec)
    print('### System.Line.RunJS: display_time({})'.format(sec))

def rocket_launch():
    print('### System.Line.RunJS: start_fly_animation()')
    print('### System.Line.RunJS: timer()')
`

var mars_03 = `### AsomeCODE.Version: mars_03.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_03/')")
    input()

def start_animation():
    print('### System.Line.RunJS: start_animation()')

def display_time(sec):
    print('### System.Line.RunJS: display_time({})'.format(str(sec)))

def separate_bottom_spaceship():
    print('### System.Line.RunJS: separate_spaceship_booster(3, 3000)')

def separate_middle_spaceship():
    print('### System.Line.RunJS: separate_spaceship_booster(2, 1500)')
`

var mars_04 = `### AsomeCODE.Version: mars_04.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_04/')")
    input()

def turn_on(x, y):
    print('### System.Line.RunJS: turn_on({}, {})'.format(x, y))

def turn_off(x, y):
    print('### System.Line.RunJS: turn_off({}, {})'.format(x, y))
`

var mars_05 = `### AsomeCODE.Version: mars_05.py=1 :End.

def show_sender():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_05_sender/')")
    input()

def show_receiver():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_05_receiver/')")
    input()

def display_message(msg):
    msg = msg[1:-1]
    print("### System.Line.RunJS: display_message('{}')".format(msg))
`

var mars_06 = `### AsomeCODE.Version: mars_06.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_06/')")
    input()

def probe_start():
    print('### System.Line.RunJS: probe_start()')

def up():
    print('### System.Line.RunJS: probe_up()')

def down():
    print('### System.Line.RunJS: probe_down()')
`

var mars_07 = `### AsomeCODE.Version: mars_07.py=1 :End.

y =0
speed = 0
is_engine_on = False

def show():
    global y, speed
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_07/')")
    input()
    y =0
    speed = 0

def update():
    global y, speed
    y += speed
    if is_engine_on:
        speed -= 0.05
        print("### System.Line.RunJS: move_probe({}, {}, 'on')".format(y, speed))
    else:
        speed += 0.01
        print("### System.Line.RunJS: move_probe({}, {}, 'off')".format(y, speed))

def get_speed():
    return(speed)

def engine_on():
    global is_engine_on
    is_engine_on = True

def engine_off():
    global is_engine_on
    is_engine_on = False

def is_landed():
    if y >= 200:
        return True
    else:
        return False

def cheack_result():
    if speed > 0.3:
        print("### System.Line.RunJS: probe_state('explode')")
        print('### System.Line.RunJS: show_result(0)')
    else:
        engine_off()
        print('### System.Line.RunJS: show_result(1)')
`

var mars_08 = `### AsomeCODE.Version: mars_08.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_08/')")
    input()

def check_fruits(temperature, humidity):
    print('### System.Line.RunJS: check_fruits({} , {})'.format(temperature, humidity))

def get_temperature(temperature):
    print('### System.Line.RunJS: get_temperature({})'.format(temperature))

def get_humidity(humidity):
    print('### System.Line.RunJS: get_humidity({})'.format(humidity))

def heater_on(temperature):
    print('### System.Line.RunJS: heater_on({})'.format(temperature))

def heater_off(temperature):
    print('### System.Line.RunJS: heater_off({})'.format(temperature))

def water_pump_on(humidity):
    print('### System.Line.RunJS: water_pump_on({})'.format(humidity))

def water_pump_off(humidity):
    print('### System.Line.RunJS: water_pump_off({})'.format(humidity))
`

var mars_09 = `### AsomeCODE.Version: mars_09.py=1 :End.

array= [[1,1,1,1,1,1],
        [1,2,0,0,1,1],
        [1,0,1,0,1,1],
        [1,0,1,0,1,2],
        [1,0,1,1,0,0],
        [1,2,0,0,0,1]]
visited = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_09/')")
    input()
    for i in range(6):
        for j in range(6):
            visited[i][j] =0

def scan():
    for x in range(1, 6):
        for y in range(1, 6):
            if array[y][x] == 1:
                print("### System.Line.RunJS: make_obstacle('{}', '{}')".format(x, y))
            if array[y][x] == 2:
                print("### System.Line.RunJS: make_mineral('{}', '{}')".format(x, y))

def move(x,y,z) :
    global visited
    visited[y][x] = 1
    print('### System.Line.RunJS: move({}, {}, {})'.format(x, y, z))
    if array[y][x] == 2:
        print('### System.Line.RunJS: get_mineral({}, {})'.format(x, y))

def check_arrival(x,y) :
    now_position = str(x) +str(y)
    if now_position == '53':
        print('### System.Line.RunJS: arrive()')
        return

def cheack_state(x, y):
    state = False
    if 0 < x < 6 and 0 < y < 6:
        if (visited[y][x] == 0) and (array[y][x] != 1):
            state = True
    return state

def up():
    print('### System.Line.RunJS: up()')

def down():
    print('### System.Line.RunJS: down()')

def right():
    print('### System.Line.RunJS: right()')

def left():
    print('### System.Line.RunJS: left()')
`

var mars_10 = `### AsomeCODE.Version: mars_10.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_10/')")
    input()

def rotate_right():
    print("### System.Line.RunJS: image_rotation('right')")

def rotate_left():
    print("### System.Line.RunJS: image_rotation('left')")

def forward():
    print('### System.Line.RunJS: go_to_forward()')

def backward():
    print('### System.Line.RunJS: go_to_backward()')
`

var mars_11 = `### AsomeCODE.Version: mars_11.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_11/')")
    input()

def turn_right():
    print("### System.Line.RunJS: turn('right')")

def turn_left():
    print("### System.Line.RunJS: turn('left')")

def shoot_missile():
    print('### System.Line.RunJS: missile_launch()')
`

var mars_12 = `### AsomeCODE.Version: mars_12.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_12/')")
    input()

def sort_mineral(number, kind):
    print('### System.Line.RunJS: sort_mineral({}, {})'.format(number, kind))

def bring_mineral():
    print('### System.Line.RunJS: button_click()')    
`

var mars_13 = `### AsomeCODE.Version: mars_13.py=1 :End.

def show_sender():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_13_sender/')")
    input()

def show_receiver():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_13_receiver/')")
    input()

def set_color(color):
    color = color[1:-1]
    print("### System.Line.RunJS: setColor('{}')".format(color))

def draw_pixel(x, y):
    x = x[1:]
    y = y[:-1]
    print('### System.Line.RunJS: draw_image({}, {})'.format(x, y))
`

var mars_3d = `### AsomeCODE.Version: mars_3d.py=1 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=mars_3d/')")
    input()

def go_left():
    print('### System.Line.RunJS: go_left()')


# import udp_socket
# import internet
# import mars_3d

# internet.open_ap('ryu', '123456789a')
# s =  udp_socket.create()
# s.open(1234)
# mars_3d.show()
# delay(1)
# while True:
#     msg = s.read_text()
#     if msg:
#         if msg == '1':
#             mars_3d.go_left()
`

var maze = `### AsomeCODE.Version: maze.py=2 :End.

path = [ 
    ( 1, 12), (12, 13), (13,  2), ( 2,  3), ( 3,  4), (13, 24), (24, 23), (23, 34), (34, 35), (35, 46), (46, 45), (45, 56),
    (56, 67), (67, 78), (24, 25), (25, 14), (14, 15), (15, 26), (26, 37), (37, 36), (36, 47), (47, 48), (48, 59), (48, 49),
    (49, 38), (38, 39), (39, 28), (28, 27), (27, 16), (16,  5), (16, 17), (17,  6), ( 6,  7), ( 7, 18), (18, 29), (18, 19),
    (19, 30), (30, 41), (41, 40), (40, 51), (51, 62), (62, 61), (61, 50), (46, 57), (57, 58), (58, 69), (69, 70), (70, 81),
    (81, 82), (67, 68), (68, 79), (79, 80),    (60, 71), (71, 72), (72, 73), (73, 84), (84, 83), (73, 74), (74, 63), (63, 62),
    ( 8,  9), ( 9, 20), (20, 21), (21, 10), (10, 11), (20, 31), (31, 32), (31, 42), (42, 41), (51, 52), (52, 53), (53, 64),
    (64, 75), (75, 86), (86, 87), (22, 33), (33, 44), (44, 55), (44, 43), (43, 54), (54, 65), (65, 76), (65, 64), (65, 66),
    (76, 77), (77, 88)
]

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=maze/')")

def start():
    print('### System.Line.RunJS: start()')

def move_xy(x, y):
    print('### System.Line.RunJS: move_xy(%d, %d)' % (x, y))

def can_move(x1, y1, x2, y2):
    i1 = x1 + y1 * 11 + 1
    i2 = x2 + y2 * 11 + 1
    for i in range(len(path)):
        if (i1 in path[i]) and (i2 in path[i]):
            return True
    return False
`
var maze_maker = `### AsomeCODE.Version: maze_maker.py=3 :End.

def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=maze_maker/')")

def set_cell_type(x, y, cell_type):
    print('### System.Line.RunJS: set_cell_type(%d, %d, %d)' % (x, y, cell_type))

def move_xy(x, y):
    print('### System.Line.RunJS: move_xy(%d, %d)' % (x, y))

def get_left(path, x, y):
    x = x - 1
    if x < 0: return (9, -1, -1)
    return (path[y][x], x, y)

def get_right(path, x, y):
    x = x + 1
    if x >= 10: return (9, -1, -1)
    return (path[y][x], x, y)

def get_up(path, x, y):
    y = y - 1
    if y < 0: return (9, -1, -1)
    return (path[y][x], x, y)

def get_down(path, x, y):
    y = y + 1
    if y >= 8: return (9, -1, -1)
    return (path[y][x], x, y)

def find_next_move(path, x, y):
    values = (get_left(path, x, y), get_right(path, x, y), get_up(path, x, y), get_down(path, x, y))
    
    min_value = 9
    index = -1    
    
    for i in range(4):
        if values[i][0] < min_value:
            index = i
            min_value = values[i][0]

    if min_value >= 9:
        return (9, -1, -1)
    else:
        return values[index]
`

var max7219 = `### AsomeCODE.Version: max7219.py=7 :End.


from boot import *
from machine import *


class MAX7219(object):

    def __init__(self, aclk, acs, adin):
        self.clk = Pin(pin_map[aclk], Pin.OUT)
        self.cs = Pin(pin_map[acs], Pin.OUT)
        self.din = Pin(pin_map[adin], Pin.OUT)

        self.write(0x09, 0x00)
        self.write(0x0a, 0x0f)
        self.write(0x0b, 0x07)
        self.write(0x0c, 0x01)

        self.clear()


    def clear(self):
        self.draw([0, 0, 0, 0, 0, 0, 0, 0])


    def write_byte(self, data):
        for i in range(8):
            self.clk.low()
            self.din.value(data & 0x80)
            data = data << 1
            self.clk.high()


    def write(self, index, data):
        self.cs.low()
        self.write_byte(index)
        self.write_byte(data)
        self.cs.high()


    def draw(self, data):
        for i in range(8):
            self.cs.low()
            self.write_byte(i+1)
            self.write_byte(data[i])
            self.cs.high()


def create(aclk, acs, adin):
    return MAX7219(aclk, acs, adin)


obj = None


def open(aclk, acs, adin):
    global obj
    obj = create(aclk, acs, adin)


def clear():
    obj.clear()


def write_byte(data):
    obj.write_byte(data)


def write(index, data):
    obj.write(index, data)


def draw(data):
    obj.draw(data)
`

var motion_detect = `### AsomeCODE.Version: motion_detect.py=2: End.

ready = 0
far_none = 1
far_close = 2
close_none = 3
close_far = 4
wait = 5
far = 6
close = 7

state = ready

def start():
    global state

    state = ready

def get(cm):
    global state
    
    if state in [far_none, far_close, close_none, close_far]:
        state = wait
        return state
    
    if cm < 0: return state
    
    if state == ready:
        if cm > 50:
            pass
        elif cm > 20:
            state = far
        elif cm < 20: 
            state = close
            
    if state == wait:
        if cm > 50:
            state = ready

    if state == far:
        if cm > 50:
            state = far_none
        elif cm < 20:
            state = far_close

    if state == close:
        if cm > 50:
            state = close_none
        elif cm > 20:
            state = close_far
            
    return state
`

var music = `### AsomeCODE.Version: music.py=10 :End.


from boot import *
from machine import *
from utime import *	
from notes import *	


beeper = None
volume = 512

def open(pin):
	global beeper
	beeper = PWM(Pin(pin_map[pin], Pin.OUT), 0, 1000)
	beeper.freq(10)
	sleep(1.0)
	beeper.duty(0)

def close():
	global beeper
	if beeper != None: beeper.deinit()

def get_tone(name):
	return round(notes[name])

def tone(freq, duration=0):
    global beeper

    if freq <= 0:
        beeper.duty(0)
    else:
        beeper.duty(volume)
        beeper.freq(freq)

    if duration > 0:
        sleep(duration / 1000)
        beeper.duty(0)

def mute():
	beeper.duty(0)	

def note(name, duration):
	global beeper

	if name == ' ':
		beeper.duty(0)
		sleep(duration / 1000)
	else:
		beeper.duty(volume)
		beeper.freq( round(notes[name]) )
		sleep(duration / 1000)
		beeper.duty(0)
		sleep(duration / (10 * 1000))
`

var music_player = `### AsomeCODE.Version: music_player.py=1 :End.


from boot import *
import music
import interval

timer = interval.create()
notes = []
index = -1
active = False

def open(pin):
    music.open(pin)

def close():
    music.close()

def tone(freq):
    music.tone(freq)

def add(name, duration):
    notes.append( (name, duration) )

def play():
    global index, active

    index = 0
    timer.start()
    music.tone( music.get_tone(notes[index][0]) )
    active = True

def stop():
    global active

    music.mute()
    active = False

def clear():
    global notes, active

    music.mute()
    notes = []
    active = False

def update():
    global index, active

    if active == False:
        music.mute()
        return

    if timer.get() >= notes[index][1]:
        timer.start()
        index = index + 1
        if index >= len(notes):
            active = False
        else:
            music.tone( music.get_tone(notes[index][0]) )

def is_active():
    return active
`

var notes = `### AsomeCODE.Version: notes.py=2 :End.


notes = {
    ' ': 10,
    'C0': 16.35,
    'C#0': 17.32,
    'Db0': 17.32,
    'D0': 18.35,
    'D#0': 19.45,
    'Eb0': 19.45,
    'E0': 20.6,
    'F0': 21.83,
    'F#0': 23.12,
    'Gb0': 23.12,
    'G0': 24.5,
    'G#0': 25.96,
    'Ab0': 25.96,
    'A0': 27.5,
    'A#0': 29.14,
    'Bb0': 29.14,
    'B0': 30.87,
    'C1': 32.7,
    'C#1': 34.65,
    'Db1': 34.65,
    'D1': 36.71,
    'D#1': 38.89,
    'Eb1': 38.89,
    'E1': 41.2,
    'F1': 43.65,
    'F#1': 46.25,
    'Gb1': 46.25,
    'G1': 49,
    'G#1': 51.91,
    'Ab1': 51.91,
    'A1': 55,
    'A#1': 58.27,
    'Bb1': 58.27,
    'B1': 61.74,
    'C2': 65.41,
    'C#2': 69.3,
    'Db2': 69.3,
    'D2': 73.42,
    'D#2': 77.78,
    'Eb2': 77.78,
    'E2': 82.41,
    'F2': 87.31,
    'F#2': 92.5,
    'Gb2': 92.5,
    'G2': 98,
    'G#2': 103.83,
    'Ab2': 103.83,
    'A2': 110,
    'A#2': 116.54,
    'Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'C#3': 138.59,
    'Db3': 138.59,
    'D3': 146.83,
    'D#3': 155.56,
    'Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'F#3': 185,
    'Gb3': 185,
    'G3': 196,
    'G#3': 207.65,
    'Ab3': 207.65,
    'A3': 220,
    'A#3': 233.08,
    'Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'C#4': 277.18,
    'Db4': 277.18,
    'D4': 293.66,
    'D#4': 311.13,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'F#4': 369.99,
    'Gb4': 369.99,
    'G4': 392,
    'G#4': 415.3,
    'Ab4': 415.3,
    'A4': 440,
    'A#4': 466.16,
    'Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'C#5': 554.37,
    'Db5': 554.37,
    'D5': 587.33,
    'D#5': 622.25,
    'Eb5': 622.25,
    'E5': 659.26,
    'F5': 698.46,
    'F#5': 739.99,
    'Gb5': 739.99,
    'G5': 783.99,
    'G#5': 830.61,
    'Ab5': 830.61,
    'A5': 880,
    'A#5': 932.33,
    'Bb5': 932.33,
    'B5': 987.77
}
`

var rotary = `### AsomeCODE.Version: rotary.py=2 :End.


from boot import *
from machine import Timer


class Encoder:

    old_clk = False
    old_value = 0
    value_ = 0
    direction_ = 0

    def __init__(self, clk_pin, dt_pin):
        self.clk = InputPullUp(clk_pin)
        self.dt     = InputPullUp(dt_pin)

    def set(self, value):
        self.value_ = value

    def value(self):
        return(self.value_)

    def direction(self):
        if not self.has_changed(): return 0
        return(self.direction_)

    def update(self):
        clk = self.clk.value()
        dt  = self.dt.value()

        if not clk and self.old_clk:
            if dt:
                self.value_ = self.value_ + 1
            else:
                self.value_ = self.value_ - 1

        self.old_clk = clk

    def has_changed(self):
        changed = self.old_value != self.value_

        if self.old_value > self.value_: self.direction_ = -1
        elif self.old_value < self.value_: self.direction_ = 1
        else: self.direction_ = 0

        self.old_value = self.value_

        return changed


def create(clk_pin, dt_pin):
    return Encoder(clk_pin, dt_pin)
`

var scheduler = `### AsomeCODE.Version: scheduler.py=3 :End.


from utime import *


class Scheduler(object):

    def __init__(self):
        self.offset = 0
        self.count = 0
        self.old = ticks_ms()

    def set_offset(self, t):
        self.offset = t

    def start(self):
        self.count = 0
        self.old = ticks_ms()
        
    def check(self, t):
        now = ticks_ms()
        if now > self.old:
            self.count = self.count + (now - self.old)
        self.old = now;
        return self.count >= (t + self.offset)
        
    def wait(self, t):
        while not self.check(t):
            pass

def create():
    return Scheduler()
`

var sliding_puzzle = `### AsomeCODE.Version: sliding_puzzle.py=3 :End.


def show(index=1):
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=sliding_puzzle%d/')" % index)

def blank_left():
    print('### System.Line.RunJS: blank_left()')

def blank_right():
    print('### System.Line.RunJS: blank_right()')

def blank_up():
    print('### System.Line.RunJS: blank_up()')

def blank_down():
    print('### System.Line.RunJS: blank_down()')
`

var sound_effect = `### AsomeCODE.Version: sound_effect.py=2 :End.


from boot import *
import music


def open(pin):
    music.open(pin)

def close():
    music.close()

def tone(freq):
    music.tone(freq)

def mute():
    music.mute()    

def note(name, duration):
    music.note(name, duration)

def level_up():
    note('A4', 50)
    note('G4', 50)
    note('E4', 50)
    note('C4', 50)
    note('D4', 50)
    note('B4', 50)
    note('F4', 50)
    note('C5', 50)
    note('A4', 50)
    note('G4', 50)
    note('E4', 50)
    note('C4', 50)
    note('D4', 50)
    note('B4', 50)
    note('F4', 50)
    note('C5', 50)
    
def so_sad():
    note('B4',  300)
    note(' ',    50)
    note('C5',  300)
    note(' ',    50)
    note('Ab4', 300)
    note(' ',    50)
    note('Ab3', 300)
    note(' ',    50)
    note('Eb4', 500)
    note(' ',   500)
    note('Bb3', 300)
    note(' ',   100)
    note('C4',  300)
    note(' ',   100)
    note('Ab3', 300)
    note(' ',   100)
    note('Ab2', 300)
    note(' ',   100)
    note('Eb3', 500)
    note(' ',   500)
    note('Bb2', 300)
    note(' ',   200)
    note('C3',  300)
    note(' ',   200)
    note('Ab2', 300)
    note(' ',   500)
    note('Ab1', 300)
    note(' ',   550)
    note('Eb2', 500)
    
def ariel():
    note('C4',  300)
    note(' ',    50)
    note('D4',  300)
    note(' ',    50)
    note('Eb4' ,300)
    note(' ',   250)
    note('D4',  300)
    note(' ',    50)
    note('Eb4', 300)
    note(' ',    50)
    note('F4',  300)
    note(' ',   250)
    note('C4',  300)
    note(' ',    50)
    note('D4',  300)
    note(' ',    50)
    note('Eb4', 500)
    note(' ',    50)
    note('D4',  300)
    note(' ',    50)
    note('Eb4', 300)
    note(' ',    50)
    note('F4',  600)
    note(' ',    50)
    
def laugh():
    note('C4', 100)
    note('E4', 100)
    note('G4', 100)
    note('C5', 100)
    note('C4', 100)
    note(' ',   25)
    
    note('C4', 100)
    note('E4', 100)
    note('G4', 100)
    note('C5', 100)
    note('C4', 100)
    note(' ',   25)
    note('C4',  25)
    note(' ',   25)
    note('C4',  25)
    note(' ',   25)
    note('C4',  25)
    note(' ',   25)
    note('C4',  25)
    note(' ',   25)
    note('C4',  25)
    note(' ',   25)
    note('C4',  25)
    note(' ',   25)
    note('C4',  25)
    
def sad():
    tone(784)
    delay(0.5)
    tone(738)
    delay(0.5)
    tone(684)
    delay(0.5)
    tone(644)
    delay(1) 
    mute()
    
def victory():
    tone(523) 
    delay(0.1) 
    note(' ', 25)
    tone(523) 
    delay(0.1) 
    note(' ', 25)
    tone(523) 
    delay(0.1) 
    note(' ', 25)
    tone(659) 
    delay(0.35)  
    tone(784) 
    delay(0.25)  
    tone(523) 
    delay(0.1) 
    note(' ', 25)
    tone(523) 
    delay(0.1) 
    note(' ', 25)
    tone(523) 
    delay(0.1) 
    note(' ', 25)
    tone(659) 
    delay(0.35)  
    tone(784) 
    delay(0.25)  
    note(' ', 150)
    tone(784) 
    delay(0.2)  
    tone(884) 
    delay(0.1)  
    tone(784) 
    delay(0.1)  
    tone(687) 
    delay(0.1)  
    tone(659) 
    delay(0.1)  
    tone(519) 
    delay(0.2)
    mute()
    
def get_ready():
    tone(600)
    delay(0.165)
    tone(50)
    delay(0.083)
    tone(600)
    delay(0.165)
    tone(50)
    delay(0.083)
    tone(650)
    delay(0.165)
    tone(600)
    delay(0.165)
    tone(50)
    delay(0.083)
    tone(600)
    delay(0.165)
    tone(700)
    delay(0.275)
    tone(800)
    delay(0.275)
    tone(900)
    delay(0.110)
    mute()
`

var spacecraft = `### AsomeCODE.Version: spacecraft.py=3 :End.


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=spacecraft/')")

def start():
    print('### System.Line.RunJS: start()')

def move_left():
    print('### System.Line.RunJS: move_left()')

def move_right():
    print('### System.Line.RunJS: move_right()')

def set_speed(speed):
    print('### System.Line.RunJS: set_speed(%d)' % speed)    
`

var stove = `### AsomeCODE.Version: stove.py=2 :End.


from boot import *


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=stove/')")
    delay(2)

def on():
    print('### System.Line.RunJS: stove_on()')

def off():
    print('### System.Line.RunJS: stove_off()')
`

var tcp_socket = `### AsomeCODE.Version: tcp_socket.py=2 :End.


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
`

var telnet_server = `### AsomeCODE.Version: telnet_server.py=1 :End.


import socket
import network
import uos
import errno
import io

client = None
server_socket = None

class TelnetWrapper(io.IOBase):
    def __init__(self, socket):
        self.socket = socket
        self.discard_count = 0
        
    def readinto(self, b):
        readbytes = 0
        for i in range(len(b)):
            try:
                byte = 0
                while(byte == 0):
                    byte = self.socket.recv(1)[0]
                    if byte == 0xFF:
                        self.discard_count = 2
                        byte = 0
                    elif self.discard_count > 0:
                        self.discard_count -= 1
                        byte = 0
                    
                b[i] = byte
                
                readbytes += 1
            except (IndexError, OSError) as e:
                if type(e) == IndexError or len(e.args) > 0 and e.args[0] == errno.EAGAIN:
                    if readbytes == 0:
                        return None
                    else:
                        return readbytes
                else:
                    raise
        return readbytes
    
    def write(self, data):
        while len(data) > 0:
            try:
                written_bytes = self.socket.write(data)
                data = data[written_bytes:]
            except OSError as e:
                if len(e.args) > 0 and e.args[0] == errno.EAGAIN:
                    pass
                else:
                    raise
    
    def close(self):
        self.socket.close()

def accept_telnet_connect(telnet_server):
    global client

    if client:
        uos.dupterm(None)
        client.close()
    
    client, remote_addr = telnet_server.accept()
    print('Telnet connection from:', remote_addr)
    client.setblocking(False)
    client.setsockopt(socket.SOL_SOCKET, 20, uos.dupterm_notify)
    
    client.sendall(bytes([255, 252, 34])) # dont allow line mode
    client.sendall(bytes([255, 251, 1])) # turn off local echo
    
    uos.dupterm(TelnetWrapper(client))

def stop():
    global server_socket, client
    uos.dupterm(None)
    if server_socket:
        server_socket.close()
    if client:
        client.close()

def start(port=23):
    stop()
    global server_socket
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    
    ai = socket.getaddrinfo('0.0.0.0', port)
    addr = ai[0][4]
    
    server_socket.bind(addr)
    server_socket.listen(1)
    server_socket.setsockopt(socket.SOL_SOCKET, 20, accept_telnet_connect)
    
    for i in (network.AP_IF, network.STA_IF):
        wlan = network.WLAN(i)
        if wlan.active():
            print('Telnet server started on {}:{}'.format(wlan.ifconfig()[0], port))
`

var timer = `### AsomeCODE.Version: timer.py=1 :End.


from boot import *
import tm1637


min_ = 0
sec_ = 0
mode_ = 2
blink_ = True

old_tick = ticks_ms()
count = 0

def open(clk, dio):
    global old_tick, count

    min_ = 0
    sec_ = 0
    mode_ = 2
    blink_ = True

    old_tick = ticks_ms()
    count = 0

    tm1637.open(clk, dio)
    tm1637.time(min_, sec_, True)

def number(no):
    tm1637.number(no)

def update():
    global blink_, old_tick, count

    tick = ticks_ms()
    if (tick > old_tick):
            count = count + (tick - old_tick)
    old_tick = tick

    if mode_ == 2:
        count = 0
        tm1637.time(min_, sec_, True)
        return

    if count < 500: return

    count = 0

    if mode_ == 0:
        blink_ = not blink_
        if blink_:
            text = tm1637.encode_string('  {0:0>2d}'.format(sec_))
            tm1637.write(text)
        else:
            tm1637.time(min_, sec_, True)

    if mode_ == 1:
        blink_ = not blink_
        if blink_:
            text = tm1637.encode_string('{0:0>2d}'.format(min_))
            tm1637.write(text)
        else:
            tm1637.time(min_, sec_, True)

def set_mode(v):
    global mode_
    mode_ = v % 3
    
def mode():
    return mode_
    
def set_value(v):
    global min_, sec_

    if v < 0: v = 0
    if v > 59: v = 59

    if mode_ == 0: min_ = v
    if mode_ == 1: sec_ = v

def value():
    if mode_ == 0: return min_
    if mode_ == 1: return sec_
    return 0
    
def duration():
    return min_ * 60 + sec_    
`

var tm1637 = `### AsomeCODE.Version: tm1637.py=8 :End.


from boot import *
from machine import *
from utime import *


SLEEP_INTERVAL = 10

_CMD_SET1 = const(64) 
_CMD_SET2 = const(192)
_CMD_SET3 = const(128)

_SEGMENTS = [63,6,91,79,102,109,125,7,127,111,119,124,57,94,121,113,0,64]

brightness = 7
clk = None
dio = None


def open(aclk, adio):
    global clk, dio

    clk = Pin(pin_map[aclk], Pin.IN)
    dio = Pin(pin_map[adio], Pin.IN)
    clk.off()
    dio.off()

def _start():
    global clk, dio
    
    dio.init(dio.OUT)
    sleep_us(SLEEP_INTERVAL)

def _stop():
    global clk, dio
    
    dio.init(dio.OUT)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.IN)
    sleep_us(SLEEP_INTERVAL)
    dio.init(dio.IN)
    sleep_us(SLEEP_INTERVAL)

def _write_comm1():
    _start()
    _write_byte(_CMD_SET1)
    _stop()

def _write_comm3():
    global brightness

    _start()
    _write_byte(_CMD_SET3 + brightness + 7)
    _stop()

def _write_byte(b):
    global clk, dio
    
    for i in range(8):
        clk.init(clk.OUT)
        sleep_us(SLEEP_INTERVAL)
        dio.init(dio.IN if b & 1 else dio.OUT)
        sleep_us(SLEEP_INTERVAL)
        clk.init(clk.IN)
        sleep_us(SLEEP_INTERVAL)
        b >>= 1
    clk.init(clk.OUT)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.IN)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.OUT)
    sleep_us(SLEEP_INTERVAL)

def set_brightness(val=None):
    global brightness
     
    if val is None:
        val = 7
    if not 0 <= val <= 7:
        val = 7
    brightness = val
    _write_comm1()
    _write_comm3()

def write(segments, pos=0):
    if not 0 <= pos <= 3:
        raise ValueError('Position out of range')
    _write_comm1()

    _start()
    _write_byte(_CMD_SET2 + pos)
    for seg in segments:
        _write_byte(seg)
    _stop()
    _write_comm3()

def encode_digit(digit):
    return _SEGMENTS[digit & 0x0f]

def encode_string(string):
    segments = bytearray(4)
    for i in range(0, min(4, len(string))):
        segments[i] = encode_char(string[i])
    return segments

def encode_char(char):
    o = ord(char)
    if o == 32:
        return _SEGMENTS[16]
    if o == 45:
        return _SEGMENTS[17]
    if o >= 65 and o <= 70:
        return _SEGMENTS[o-55]
    if o >= 97 and o <= 102:
        return _SEGMENTS[o-87]
    if o >= 48 and o <= 57:
        return _SEGMENTS[o-48]
    raise ValueError('Character out of range')

def write_str(text):
    write( encode_string(text) )

def hex(val):
    string = '{:04x}'.format(val & 0xffff)
    write(encode_string(string))

def number(num):
    num = max(-999, min(num, 9999))
    string = '{0: >4d}'.format(num)
    write(encode_string(string))

def time(num1, num2, colon=True):
    num1 = max(-9, min(num1, 99))
    num2 = max(-9, min(num2, 99))
    segments = encode_string('{0:0>2d}{1:0>2d}'.format(num1, num2))
    if colon:
        segments[1] |= 0x80
    write(segments)
`

var udp_socket = `### AsomeCODE.Version: udp_socket.py=11 :End.


import socket
import os
import errno


class Server(object):

    def __init__(self):
        self.s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        self.s.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self.s.setblocking(False)

    def open(self, port):
        self.port = port
        self.s.bind(('', port))

    def read(self):
        try:
            msg, addr = self.s.recvfrom(512)
        except:
            msg = None
            addr = None
        return (msg, addr)

    def read_text(self):
        msg, addr = self.read()
        if msg != None:
            return msg.decode()
        else:
            return None

    def send(self, host, port, packet):
        try:
            self.s.sendto(packet, (host, port))
        except:
            pass

    def send_text(self, host, port, packet):
        try:
            self.s.sendto(packet.encode(), (host, port))
        except:
            pass


def create():
    return Server()


sck_ = None

def open(port):
    global sck_
    sck_ = Server()
    sck_.open(port)

def read_text():
    msg = sck_.read_text()
    if msg:
       print('#UDP ' + msg + '  ###')
    return msg

def send_text(host, port, packet):
    sck_.send_text(host, port, packet)
`

var vibration_sensor = `### AsomeCODE.Version: vibration_sensor.py=5 :End.


from boot import *
from utime import *


class VibrationSensor(object):
    
    def __init__(self, pin, capacity):
        self.sensor = InputPullUp(pin)
        self.old_state = self.sensor.value()
        self.old_tick = 0
        self.active_count = 0
        self.capacity = capacity

    def is_active(self):
        state = self.sensor.value()

        if state != self.old_state:
            self.old_state = state
            self.old_tick = ticks_ms()
            self.active_count = self.capacity

        if self.active_count > 0:
            tick = ticks_ms()
            if tick > self.old_tick:
                self.active_count = self.active_count - (tick - self.old_tick)
            self.old_tick = tick

        return self.active_count > 0


def create(pin, capacity):
    return VibrationSensor(pin, capacity)
`

var asomebot_pro = `### AsomeCODE.Version: asomebot.py=2 :End.


from boot import *
from asomebot_align import *
from machine import *
from utime import *

w0 = 0.008
w1 = 0.03
w2 = 0.1
w3 = 0.2
w4 = 0.3

servos = []
old_angles = [-1, -1, -1, -1]

def ready(pin1, pin2, pin3, pin4):
    global servos
    servos = []
    pins = (pin1, pin2, pin3, pin4)
    for i in range(4):
        s = PWM(Pin(pin_map[pins[i]]))
        s.freq(128)  
        servos.append(s)

def align(b0, b1, b2, b3):
    global base
    base = (b0, b1, b2, b3)

def angle(n,d):
    if d != old_angles[n]: servos[n].duty( 240 * d // 180 + 70 )
    old_angles[n] = d

def angles(n,d,w=0):
    size = len(n)

    if w > 0:
        start = ticks_ms()
        while True:
            current = ticks_ms()
            if current < start:
                break

            term = current - start
            if term > w:
                break

            ratio = term / w
            
            for i in range(size): 
                index = n[i]
                diff = (base[index] + d[i] - old_angles[index]) * ratio
                a = old_angles[index] + int(diff)
                servos[index].duty( 240 * a // 180 + 70 )

            delay(w1)

    for i in range(size): angle(n[i], base[n[i]] + d[i])

def turn_off():
    for servo in servos:
        servo.duty(0)
        servo.deinit()

def home():
    for i in range(4): 
        servos[i].duty( 240 * base[i] // 180 + 70 )
        old_angles[i] = base[i]
    delay(w4)

def leg_up(d=1, a1=60, a2=25):
    if d == 1:
        angle(2, base[2] - a1)
        angles([3], [-a2], 300)
    else:
        angle(3, base[3] + a1)
        angles([2], [a2], 300)

temp_walk = 0

def walk(d, a1, a2, a3, m, s1, s2):
    angles((3, 2), (-a1, -a2), s1)
    angles((0, 1), (-a3 * d, -a3 * d), s2)
    angles((2, 3), (0, 0), s1)

    if m <= 0:
        angles((2, 3), (a1, a2+m), s1)
    else:
        angles((2, 3), (a1-m, a2), s1)
    angles((0, 1), (a3 * d, a3 * d), s2)
    angles((2, 3), (0, 0), s1)
    
def forward(a1=20, a2=40, a3=20, m=0, s1=150, s2=300):
    walk(1, a1, a2, a3, m, s1, s2)

def backward(a1=20, a2=40, a3=20, m=0, s1=150, s2=300):
    walk(-1, a1, a2, a3, m, s1, s2)

def turn(d, a1, a2, a3, s):
    angles((2, 3), (-a1, -a2), s)
    delay(w4)
    
    a = 1
    if d == 1: a = 0

    angles([a], [-a3], s)
    delay(w4)

    angles( (2, 3), (0, 0), s)
    delay(w2)
    
    angles((3, 2), (a1, a2), s)
    delay(w4)

    angles([0, 1], [0, 0], s)
    delay(w2)

    angles( (2, 3), (0, 0), s)
    delay(w2)
    
def turn_left(a1=60, a2=30, a3=25, s=300):
    turn(1, a1, a2, a3, s)

def turn_right(a1=60, a2=30, a3=25, s=300):
    turn(-1, a1, a2, a3, s)

def foot_wave(d=1):
    no = 3
    if d == -1: no = 2
    b = base[no]
    for i in range(10):
        a = ((i % 3) - 1) * 20
        angle(no, b + a * d)
        delay(w3)

def mouse(d=1, a1=70, a2=30):
    leg_up(d, a1, a2)
    foot_wave(-d)

def flap():
    angles( (3, 2), (30, -30), 0.15)
    delay(0.15)
    angles( (3, 2), (-30, +30), 0.15)
    delay(0.15)
    
def warigari(w=0.2, a=45):
    angles( (0, 1), (-a, -a) ) 
    delay(w)
    angles( (0, 1), (a, a) )
    delay(w)

def tock(d=1, a=20):
    no = 2
    if d == -1: no = 3
    b = base[3]
    angle(no, b + a * d)
    delay(0.17)
    angle(no, b)
    delay(0.17)

def tick_tock():
    angle(0, base[0] - 45)
    delay(w3)
    angle(2, base[2] - 20)
    delay(w3)
    angle(2, base[2] + 30)
    delay(w3)

def wiggle():
    angles( (2, 3), (-30, -15) )
    delay(w3)
    angles( (2, 3), (0, 0) )
    delay(w3)
    angles( (2, 3), (30, 15) )
    delay(w3)
    angles( (2, 3), (0, 0) )
    delay(w3)
    
def ballet(a1=-40, a2=40):
    angles( (2, 3),  (a1, a2) )
    delay(1)
            
def left_swing():
    angles( (0, 2),  (-45, 45) )
    delay(w4)

def right_swing():
    angles( (1, 3),  (45, -45) )
    delay(w4)

def yaho():
    angles( (2, 3),  (50, -50) )
    delay(w4)

def swing():
    angle(2, base[2] - 60)
    delay(w3)
    angle(2, base[2])
    delay(w3)
    angle(3, base[3] + 60)
    delay(w3)
    angle(3, base[3])
    delay(w3)
    
def moonwalk():
    a2 = base[2]
    a3 = base[3] + 10
    for i in range(12):
        a3 = a3 + 2
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 - 2
        a3 = a3 + 2
        angle(2, a2)
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 - 2
        a3 = a3 - 2
        angle(2, a2)
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 + 2
        a3 = a3 - 2
        angle(2, a2)
        angle(3, a3)
        delay(w1)
    for i in range(12):
        a2 = a2 + 2
        angle(2, a2)
        delay(w1)
    home()
`

var asomecar_pro = `### AsomeCODE.Version: asomecar.py=16 :End.


from boot import *


forward_fast = 140
forward_slow = 75
backward_fast = 1
backward_slow = 65

forward_fasts  = (140,   1, 140,   1)
backward_fasts = (  1, 140,   1, 140)
forward_slows  = ( 75,  65,  75,  65)
backward_slows = ( 65,  75,  65,  75)


servos = []


def ready(pin1, pin2, pin3, pin4):
    global servos
    servos = []
    servos.append( ServoPin(pin1) ) 
    servos.append( ServoPin(pin2) )
    servos.append( ServoPin(pin3) )
    servos.append( ServoPin(pin4) )

def stop():
    for servo in servos:
        servo.duty(0)

def move(s1, s2, s3, s4):
    servos[0].duty(s1)
    servos[1].duty(s2)
    servos[2].duty(s3)
    servos[3].duty(s4)

def forward(speed = forward_fasts):
    for i in range(4):
        servos[i].duty(speed[i])
        
def backward(speed = backward_fasts):
    for i in range(4):
        servos[i].duty(speed[i])

def turn_left(speed = backward_fast):
    for servo in servos:
        servo.duty(speed)

def turn_right(speed = forward_fast):
    for servo in servos:
        servo.duty(speed)

def to_left(speed = backward_slow):
    servos[0].duty(0)
    servos[2].duty(0)
    servos[1].duty(speed)
    servos[3].duty(speed)

def to_right(speed = forward_slow):
    servos[1].duty(0)
    servos[3].duty(0)
    servos[0].duty(speed)
    servos[2].duty(speed)
`

var boot_pro = `### AsomeCODE.Version: boot.py=5 :End.


import esp
from machine import *
from utime import *
from urandom import *

pin_map = ( 0, 22, 23, 0, 4, 16, 17, 5, 18, 19, 21, 2, 12, 26, 32, 13, 27, 33, 15, 14, 25)
analogs = ( 0, 35, 34)

class OutputDevice:
    def __init__(self, no):
        self.no = no
        self.pin = Pin(pin_map[no], Pin.OUT)

    def value(self):
        return self.pin.value()

    def off(self):
        self.pin.value(0)

    def on(self):
        self.pin.value(1)

class ServoDevice:
    def __init__(self, no):
        self.no = no
        self.pin = PWM(Pin(pin_map[no]))
        self.pin.freq(128)  
        self.pin.duty(0)

    def duty(self, value):
        self.pin.duty( int(240 * value / 70) )

    def off(self):
        self.pin.duty(0)

    def angle(self, value):
        self.pin.duty( 240 * value // 180 + 70 )

def random(n):
    seed( ticks_us() )
    return getrandbits(32) % n

def delay(t):
    sleep(t)

def DigitalPin(no):
    return Pin(pin_map[no])

def OutputPin(no):
    return OutputDevice(no)

def InputPin(no):
    return Pin(pin_map[no], Pin.IN)

def InputPullUp(no):
    return Pin(pin_map[no], Pin.IN, Pin.PULL_UP)

def AnalogPin(no=1):
    return ADC(Pin(analogs[no]))

def ServoPin(no):
    return ServoDevice(no)

def turnoff_pins(pins=None):
    if pins == None:
        for i in range(1, len(pin_map)):
            pin = PWM(Pin(pin_map[i], Pin.OUT), 50, 0)
            pin.deinit() 
            pin = OutputPin(i)
            pin.off()
    else:
        for i in range(len(pins)):
            pin = PWM(Pin(pin_map[pins[i]], Pin.OUT), 50, 0)
            pin.deinit() 
            pin = OutputPin(pins[i])
            pin.off() 

esp.osdebug(None)
turnoff_pins()
print("### System.Started")
`

var clock_pro = `### AsomeCODE.Version: clock.py=4 :End.


from utime import *


offset = 0

def set(datetime):
    global offset
    temp = (datetime[0], datetime[1], datetime[2], datetime[4], datetime[5], datetime[6], 0, 0)
    offset = mktime(temp)

def datetime(y, m, d, h, n, s):
    global offset
    offset = mktime( (y, m, d, h, n, s, 0, 0) )

def year():
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return current[0]
    
def month():
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return current[1]
    
def day():
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return current[2]

def week():
    week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return week_text[ current[6] ]
    
def hour():
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return current[3]

def minute():
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return current[4]
    
def second():
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    return current[5]

def millis():
    return ticks_ms() % 1000

def text():    
    week_text = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    passed = mktime( localtime() )
    current = localtime(offset + passed)
    print(current)
    return "%d.%d.%d (%s) %d:%d:%d" % (current[0], current[1], current[2], week_text[current[6]], current[3], current[4], current[5])
`

var internet_pro = `### AsomeCODE.Version: internet.py=6 :End.


from network import *
import socket


def connect(ssid, password):
    ap = WLAN(AP_IF)
    ap.active(False)

    net = WLAN(STA_IF)
    net.active(True)

    net.connect(ssid, password)
    print('network config:', net.ifconfig())

def ifconfig():
    net = WLAN(STA_IF)
    return net.ifconfig()

def open_ap(ssid, pw=None):
    sta_if = WLAN(STA_IF)
    sta_if.active(False)

    ap = WLAN(AP_IF)

    if pw == None:
        ap.config(essid=ssid, authmode=AUTH_OPEN)
    else:
        ap.config(essid=ssid, authmode=AUTH_WPA_WPA2_PSK, password=pw)

    ap.active(True)
    print('network config:', ap.ifconfig())

def get_http(url):
    try:
        _, _, host, path = url.split('/', 3)
        addr = socket.getaddrinfo(host, 80)[0][-1]
        s = socket.socket()
        s.connect(addr)
        s.send(bytes('GET /%s HTTP/1.0\\\\r\\\nHost: %s\\\\r\\\n\\\\r\\\n' % (path, host), 'utf8'))

        while s.readline() != b'\\\\r\\\n':
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
        datetime = get_http("http://just-the-time.appspot.com/").split()
        d = datetime[0].split('-')
        t = datetime[1].split(':')
        return (int(d[0]), int(d[1]), int(d[2]), 0, int(t[0]) + 9, int(t[1]), int(t[2]), 0)
    except:
        return now

def send_msg(id, msg):
    url = "http://13.209.26.52/send.php?id=%s&msg=%s"
    return get_http(url % (id, msg.replace(" ", "%20")))

def get_weather(country, city):
    result = get_http("http://api.asomeblock.com/v1.0/weather.php?country=%s&city=%s" % (country, city))
    return result.split(',')
`

var line_sensor_pro = `### AsomeCODE.Version: line_sensor.py=5 :End.


from boot import *


LEFT = 1
RIGHT = 2
BOTH = 4
NOTHING = 8

left = None
right = None

def ready():
    global left, right
    left = AnalogPin(2)
    right = AnalogPin(1)

def read():
    result = 0
    if right.read() > 500: result = LEFT
    if left.read() > 500: result = result + RIGHT
    if result > 2: result = BOTH
    if result == 0: result = NOTHING
    return result
`

var max7219_pro = `### AsomeCODE.Version: max7219.py=6 :End.


from boot import *
from machine import *


clk = None
cs  = None
din = None


def open(aclk, acs, adin):
    global clk, cs, din
    
    clk = Pin(pin_map[aclk], Pin.OUT)
    cs = Pin(pin_map[acs], Pin.OUT)
    din = Pin(pin_map[adin], Pin.OUT)

    write(0x09, 0x00)
    write(0x0a, 0x0f)
    write(0x0b, 0x07)
    write(0x0c, 0x01)

    clear()


def clear():
    draw([0, 0, 0, 0, 0, 0, 0, 0])


def write_byte(data):
    global clk, cs, din
    
    for i in range(8):
        clk.low()
        din.value(data & 0x80)
        data = data << 1
        clk.high()


def write(index, data):
    global clk, cs, din
    
    cs.low()
    write_byte(index)
    write_byte(data)
    cs.high()


def draw(data):
    global clk, cs, din
    
    for i in range(8):
        cs.low()
        write_byte(i+1)
        write_byte(data[i])
        cs.high()
`

var music_pro = `### AsomeCODE.Version: music.py=2 :End.


from boot import *
from machine import *
from utime import *    


notes = {
    ' ': 10,
    'C0': 16.35,
    'Db0': 17.32,
    'D0': 18.35,
    'Eb0': 19.45,
    'E0': 20.6,
    'F0': 21.83,
    'Gb0': 23.12,
    'G0': 24.5,
    'Ab0': 25.96,
    'A0': 27.5,
    'Bb0': 29.14,
    'B0': 30.87,
    'C1': 32.7,
    'Db1': 34.65,
    'D1': 36.71,
    'Eb1': 38.89,
    'E1': 41.2,
    'F1': 43.65,
    'Gb1': 46.25,
    'G1': 49,
    'Ab1': 51.91,
    'A1': 55,
    'Bb1': 58.27,
    'B1': 61.74,
    'C2': 65.41,
    'Db2': 69.3,
    'D2': 73.42,
    'Eb2': 77.78,
    'E2': 82.41,
    'F2': 87.31,
    'Gb2': 92.5,
    'G2': 98,
    'Ab2': 103.83,
    'A2': 110,
    'Bb2': 116.54,
    'B2': 123.47,
    'C3': 130.81,
    'Db3': 138.59,
    'D3': 146.83,
    'Eb3': 155.56,
    'E3': 164.81,
    'F3': 174.61,
    'Gb3': 185,
    'G3': 196,
    'Ab3': 207.65,
    'A3': 220,
    'Bb3': 233.08,
    'B3': 246.94,
    'C4': 261.63,
    'Db4': 277.18,
    'D4': 293.66,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'Gb4': 369.99,
    'G4': 392,
    'Ab4': 415.3,
    'A4': 440,
    'Bb4': 466.16,
    'B4': 493.88,
    'C5': 523.25,
    'Db5': 554.37,
    'D5': 587.33,
    'Eb5': 622.25,
    'E5': 659.26,
    'F5': 698.46,
    'Gb5': 739.99,
    'G5': 783.99,
    'Ab5': 830.61,
    'A5': 880,
    'Bb5': 932.33,
    'B5': 987.77
}


beeper = None
volume = 512

def open(pin):
    global beeper
    beeper = PWM(Pin(pin_map[pin]))
    beeper.freq(1)
    beeper.duty(0)

def close():
    global beeper
    if beeper != None: beeper.deinit()

def get_tone(name):
    return round(notes[name])

def tone(freq, duration=0):
    global beeper

    if freq <= 0:
        beeper.duty(0)
    else:
        beeper.duty(volume)
        beeper.freq(freq)

    if duration > 0:
        sleep(duration / 1000)
        beeper.duty(0)

def mute():
    beeper.duty(0)    

def note(name, duration):
    global beeper

    if name == ' ':
        beeper.duty(0)
        sleep(duration / 1000)
    else:
        beeper.duty(volume)
        beeper.freq( round(notes[name]) )
        sleep(duration / 1000)
        beeper.duty(0)
        sleep(duration / (10 * 1000))
`

var stove_pro = `### AsomeCODE.Version: stove.py=2 :End.


from boot import *


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=stove/')")
    delay(2)

def on():
    print("### System.Line.RunJS: stove_on()")

def off():
    print("### System.Line.RunJS: stove_off()")
`

var tm1637_pro = `### AsomeCODE.Version: tm1637.py=7 :End.


from boot import *
from machine import *
from utime import *


SLEEP_INTERVAL = 10

_CMD_SET1 = const(64) 
_CMD_SET2 = const(192)
_CMD_SET3 = const(128)

_SEGMENTS = [63,6,91,79,102,109,125,7,127,111,119,124,57,94,121,113,0,64]

brightness = 7
clk = None
dio = None


def open(aclk, adio):
    global clk, dio

    clk = Pin(pin_map[aclk], Pin.IN)
    dio = Pin(pin_map[adio], Pin.IN)
    clk.value(0)
    dio.value(0)

def _start():
    global clk, dio
    
    dio.init(dio.OUT)
    sleep_us(SLEEP_INTERVAL)

def _stop():
    global clk, dio
    
    dio.init(dio.OUT)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.IN)
    sleep_us(SLEEP_INTERVAL)
    dio.init(dio.IN)
    sleep_us(SLEEP_INTERVAL)

def _write_comm1():
    _start()
    _write_byte(_CMD_SET1)
    _stop()

def _write_comm3():
    global brightness

    _start()
    _write_byte(_CMD_SET3 + brightness + 7)
    _stop()

def _write_byte(b):
    global clk, dio
    
    for i in range(8):
        clk.init(clk.OUT)
        sleep_us(SLEEP_INTERVAL)
        dio.init(dio.IN if b & 1 else dio.OUT)
        sleep_us(SLEEP_INTERVAL)
        clk.init(clk.IN)
        sleep_us(SLEEP_INTERVAL)
        b >>= 1
    clk.init(clk.OUT)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.IN)
    sleep_us(SLEEP_INTERVAL)
    clk.init(clk.OUT)
    sleep_us(SLEEP_INTERVAL)

def set_brightness(val=None):
    global brightness
     
    if val is None:
        val = 7
    if not 0 <= val <= 7:
        val = 7
    brightness = val
    _write_comm1()
    _write_comm3()

def write(segments, pos=0):
    if not 0 <= pos <= 3:
        raise ValueError("Position out of range")
    _write_comm1()

    _start()
    _write_byte(_CMD_SET2 + pos)
    for seg in segments:
        _write_byte(seg)
    _stop()
    _write_comm3()

def encode_digit(digit):
    return _SEGMENTS[digit & 0x0f]

def encode_string(string):
    segments = bytearray(4)
    for i in range(0, min(4, len(string))):
        segments[i] = encode_char(string[i])
    return segments

def encode_char(char):
    o = ord(char)
    if o == 32:
        return _SEGMENTS[16]
    if o == 45:
        return _SEGMENTS[17]
    if o >= 65 and o <= 70:
        return _SEGMENTS[o-55]
    if o >= 97 and o <= 102:
        return _SEGMENTS[o-87]
    if o >= 48 and o <= 57:
        return _SEGMENTS[o-48]
    raise ValueError("Character out of range")

def write_str(text):
    write( encode_string(text) )

def hex(val):
    string = '{:04x}'.format(val & 0xffff)
    write(encode_string(string))

def number(num):
    num = max(-999, min(num, 9999))
    string = '{0: >4d}'.format(num)
    write(encode_string(string))

def time(num1, num2, colon=True):
    num1 = max(-9, min(num1, 99))
    num2 = max(-9, min(num2, 99))
    segments = encode_string('{0:0>2d}{1:0>2d}'.format(num1, num2))
    if colon:
        segments[1] |= 0x80
    write(segments)
`

var soil_sensor = `### AsomeCODE.Version: soil_sensor.py=1 :End.


from boot import *


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=soil_sensor/')")

def read():
    return int(input())
`

var water_sensor = `### AsomeCODE.Version: water_sensor.py=1 :End.


from boot import *


def show():
    print("### System.Line.RunJS: run_cmd('Code=ShowSimulation/Page=water_sensor/')")

def read():
    return int(input())
`