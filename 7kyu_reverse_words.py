# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
# Examples

# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

def reverse_words(str):
    arr = str.split(' ')
    reversed = [i[::-1] for i in arr]
    return " ".join(reversed)

print(reverse_words("This is an example!"))
print(reverse_words("double  spaces"))

# slicing from 1st to last in steps of 1 in reverse order
# shorter alternative
def reverse_words(str):
    return ' '.join(s[::-1] for s in str.split(' '))