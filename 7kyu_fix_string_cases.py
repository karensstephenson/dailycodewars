# In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

#     make as few changes as possible.
#     if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

# For example:

# solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
# solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
# solve("coDE") = "code". Upper == lowercase. Change all to lowercase.

def solve(s):
    lowerCount = 0
    upperCount = 0
    for x in s:
        if x.islower():
            lowerCount += 1
        else: 
            upperCount += 1
    # s = [x.upper() if upperCount > lowerCount else x.lower() for x in s]
    # return ''.join(s)

    # alternative return
    if upperCount > lowerCount:
        return s.upper()
    else: 
        return s.lower()

print(solve("code"))
print(solve("CODe"))
print(solve("COde"))
print(solve("Code"))

# alternative using map() (*2 used to check if more than half of string is uppercase)
def solve_2(s):
    return s.upper() if sum(map(str.isupper, s)) * 2 > len(s) else s.lower()