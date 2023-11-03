# Messi goals function

# Messi is a soccer player with goals in three leagues:

#     LaLiga
#     Copa del Rey
#     Champions

# Complete the function to return his total number of goals in all three leagues.

# Note: the input will always be valid.

# For example:

# 5, 10, 2  -->  17

def messi(a, b, c):
    return a + b + c

# alternative: using a variable number of arguments, this sums what is given
def goals(*args):
    return sum(args)