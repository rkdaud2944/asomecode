import sys

msg = "$GPGGA,053329.00,3730.18533,N,12702.04555,E,1,06,1.55,72.2,M,18.6,M,,*61\n"
msg =  msg + "$GPGSA,A,3,25,12,31,10,18,14,,,,,,,3.70,1.55,3.36*0A\n"
msg =  msg + "$GPGSV,3,1,10,01,00,327,,10,64,230,26,12,52,072,27,14,31,304,20*7D\n"
msg =  msg + "$GPGSV,3,2,10,15,07,112,,18,43,184,32,24,28,056,,25,58,151,35*7C\n"
msg =  msg + "$GPGSV,3,3,10,31,23,251,21,32,53,317,28*76\n"
msg =  msg + "$GPGLL,3730.18533,N,12702.04555,E,053329.00,A,A*6B\n"
msg =  msg + "$GPRMC,053330.00,A,3730.18516,N,12702.04575,E,0.411,,210118,,,A*70\n"
msg =  msg + "$GPVTG,,T,,M,0.411,N,0.762,K,A*24\n"

stack = ''

signal = 0
plus = 1
for i in range(0, len(msg)):
    if msg[i] == 'L':
        if signal == 0:
            stack = stack + msg[i]
            signal = 1
        else:
            stack = ''
            while True:
                if msg[i + plus] == "\n":
                    break
                stack = stack + msg[i + plus]
                plus = plus + 1
            break



    else:
        if signal == 1:
            signal = 0
signal = 0
for i in range(len(stack)):
    if stack[i].isalpha() == True:
        if stack[i] == "E":
            signal = 1
        

print(stack)
