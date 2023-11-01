#It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

def removeChar(s):
    s = list(s)
    s.pop()
    s.pop(0)
    return "".join(s)
    
print(removeChar("eloquent"))

#shorter alternative
def removeChar2(s):
    return s[1: -1]

print(removeChar2("eloquent"))
