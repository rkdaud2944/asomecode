import max7219 
import fonts

aclk = 8 
acs = 7
adin = 6 

max7219.open(aclk, acs, adin)
max7219.draw(fonts.char['?'])