# The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

# If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

# If

#     sz is <= 0 or if str is empty return ""
#     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

# Examples:

# revrot("123456987654", 6) --> "234561876549"
# revrot("123456987653", 6) --> "234561356789"
# revrot("66443875", 4) --> "44668753"
# revrot("66443875", 8) --> "64438756"
# revrot("664438769", 8) --> "67834466"
# revrot("123456779", 8) --> "23456771"
# revrot("", 8) --> ""
# revrot("123456779", 0) --> "" 
# revrot("563000655734469485", 4) --> "0365065073456944"

# Example of a string rotated to the left by one position:
# s = "123456" gives "234561".

def rev_rot(strng, sz):
    if sz == 0 or strng == "":
        return ""
    if len(strng) % sz != 0:
        strng = strng[0: -(len(strng)%sz)]
    strings = [strng[i:i+sz] for i in range(0, len(strng), sz)]
    for x in range(len(strings)):
        sum = 0
        for num in strings[x]:
            sum += int(num)**3
        
        if sum % 2 == 0:
            strings[x] = strings[x][::-1]
        else:
            strings[x] = strings[x][1:] + strings[x][0]        
    return "".join(strings)
    

# print(rev_rot("12345", 4))
# print(rev_rot("1234567", 3))
# print(rev_rot("123456", 7))
print(rev_rot("123456987654", 6))
print(rev_rot("123456987653", 6))
print(rev_rot("66443875", 4))
print(rev_rot("66443875", 8))
print(rev_rot("664438769", 8))
print(rev_rot("123456779", 8))
print(rev_rot("", 8))
print(rev_rot("123456779", 0))
print(rev_rot("563000655734469485", 4))



#revrot("123456987654", 6) --> "234561876549"
# revrot("123456987653", 6) --> "234561356789"
# revrot("66443875", 4) --> "44668753"
# revrot("66443875", 8) --> "64438756"
# revrot("664438769", 8) --> "67834466"
# revrot("123456779", 8) --> "23456771"
# revrot("", 8) --> ""
# revrot("123456779", 0) --> "" 
# revrot("563000655734469485", 4) --> "0365065073456944"