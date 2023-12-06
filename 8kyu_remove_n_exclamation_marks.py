# Remove n exclamation marks in the sentence from left to right. n is positive integer.

def remove(s,n):
    return s.replace("!", "", n)

print(remove("!!!Hi !!hi!!! !hi",1))
print(remove("!!!Hi !!hi!!! !hi",3))
