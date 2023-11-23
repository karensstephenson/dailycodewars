# You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

# Find max(abs(length(x) − length(y)))

# If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
# Example:

# a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
# a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
# mxdiflg(a1, a2) --> 13

# Bash note:

#     input : 2 strings with substrings separated by ,
#     output: number as a string

def max_diff(a1, a2):
    differences = []
    if len(a1) == 0 or len(a2) == 0:
        return -1
    for i in a1:
        for j in a2:
            diff = abs(len(i)-len(j))
            differences.append(diff)
    return max(differences)

print(max_diff(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]))
print(max_diff(["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"], []))

# shorter alternative
def mxdiflg(a1, a2):
    if a1 and a2:
        return max(abs(len(x) - len(y)) for x in a1 for y in a2)
    return -1
