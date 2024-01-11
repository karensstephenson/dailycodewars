# Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

# If they are, change the array value to a string of that vowel.

# Return the resulting array.

def is_vow(inp):
    new_inp = []
    vow = [97, 101, 105, 111, 117]
    for x in inp:
        if x in vow:
            new_inp.append(chr(x))
        else:
            new_inp.append(x)                   
    return new_inp

print(is_vow([97, 23, 45, 117]))

# alternative
def is_vow2(inp):
    return [chr(x) if chr(x) in "aeiou" else x for x in inp]