# Nathan loves cycling.

# Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

# You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

# For example:

# time = 3 ----> litres = 1

# time = 6.7---> litres = 3

# time = 11.8--> litres = 5

import math
def hydration(time):
    return math.floor(time * 0.5)

# alternative using floor operator
def liters(time):
    return time // 2

# alternative using int()
def liters_2(time):
    return int(time*0.5)

# alternative using trunc()
def liters_3(time):
    return math.trunc(time*0.5)

