from boot import *

# 성능인증 시험 테스트용 py 파일입니다.
pin_ready = InputPin(11)
pin_trig = OutputPin(12)
pin_data = OutputPin(13)

pin_trig.off()
pin_data.off()

x_ = 0.0
y_ = 0.0
scale_ = 1.0


def init():
    set_pen_down(False)
    set_laser_on(False)


# 로컬용 private
# 아두이노 쪽에서 데이터를 받을 수 있을 때까지 기다린다
def wait_for_signal():
    while pin_ready.value() <= 0:
        pass


def send_data(data):
    wait_for_signal()

    bin_data = bin(data)
    bin_data = bin_data[2:]
    for i in range(8-len(bin_data)):
        bin_data = '0' + bin_data

    for i in range(len(bin_data)):
        print(bin_data[i])

        pin_trig.off()
        delay(0.01)

        if bin_data[i] == '0':
            pin_data.off()
        else:
            pin_data.on()

        pin_trig.on()
        delay(0.01)

        pin_trig.off()


def goto_start_position():
    global x_, y_, scale_

    x_ = 0.0
    y_ = 0.0
    scale_ = 1.0

    send_data(0)
    send_data(0)
    send_data(0)


def goto_xy(x, y):
    global x_, y_, scale_

    dir_x = 1
    if x < x_:
        dir_x = -1

    dir_y = 1
    if y < y_:
        dir_y = -1

    while abs(x_ - x) > scale_:
        move_x(dir_x)

    while abs(y_ - y) > scale_:
        move_y(dir_y)


# 로컬용 private
def move_left(x):
    global x_, y_, scale_

    send_data(1)
    send_data(x)
    send_data(0)
    x_ = x_ - (scale_ * x)


# 로컬용 private
def move_right(x):
    global x_, y_, scale_

    send_data(1)
    send_data(0)
    send_data(x)
    x_ = x_ + (scale_ * x)


def move_x(x):
    pass

# 로컬용 private
def move_up(y):
    global x_, y_, scale_

    send_data(2)
    send_data(y)
    send_data(0)
    y_ = y_ - (scale_ * y)


# 로컬용 private
def move_down(y):
    global x_, y_, scale_

    send_data(2)
    send_data(0)
    send_data(y)
    y_ = y_ + (scale_ * y)


def move_y(y):
    pass


def set_scale(value):
    global scale_
    scale_ = value


def set_pen_down(value):
    pass

def set_laser_on(value):
    pass

def move_diagonal(value, x, y):
    pass
