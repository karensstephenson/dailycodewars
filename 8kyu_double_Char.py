# Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
# Examples (Input -> Output):

# * "String"      -> "SSttrriinngg"
# * "Hello World" -> "HHeelllloo  WWoorrlldd"
# * "1234!_ "     -> "11223344!!__  "

def double_char(s):
    double = ''
    for char in s:
        double += char
        double += char
    return double

print(double_char("String"))
print(double_char("Hello World"))
print(double_char("1234!"))

# shorter alternative
def double_char_2(s):
    return ''.join(c * 2 for c in s)