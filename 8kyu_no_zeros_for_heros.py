# Numbers ending with zeros are boring.

# They might be fun in your world, but not here.

# Get rid of them. Only the ending ones.

# 1450 -> 145
# 960000 -> 96
# 1050 -> 105
# -1050 -> -105

# Zero alone is fine, don't worry about it. Poor guy anyway

def remove_zeros(num):
    if num == 0: return 0     
    return int(str(num).strip('0'))

print(remove_zeros(1450))
print(remove_zeros(960000))
print(remove_zeros(1050))
print(remove_zeros(-1050))
print(remove_zeros(0))

# shorter alternative
def no_boring_zeros(n):
    return int(str(n).rstrip('0') or '0')


