import math

tmp = AnalogPin()

# R1 = 10000
# c1 = 0.001129148
# c2 = 0.000234125
# c3 = 0.0000000876741

while True:
    # Vo = tmp.read()
    # R2 = R1 * (1023.0 / Vo - 1.0)
    # logR2 = math.log(R2)
    # T = (1.0 / (c1 + c2*logR2 + c3*logR2*logR2*logR2))
    # temp = T - 273.15

    v = tmp.read()
    temp = math.log(10000.0 / (1024.0 / v - 1)) 
    temp = 1 / (0.001129148 + (0.000234125 + (0.0000000876741*temp*temp))*temp)
    temp = temp - 273.15

    print(temp)
    delay(0.5)