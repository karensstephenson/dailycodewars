# If you can't sleep, just count sheep!!
# Task:

# Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

def count_sheep(n): 
    s = ""
    for i in range(1,n+1):
        s += ("{} sheep...".format(i))
    return s
        


print(count_sheep(3))

# alternative using join
def count_sheep_2(n):
    return ''.join(f"{i} sheep..." for i in range(1,n+1))