# Description:

# Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
# Examples

# replace("Hi!") === "H!!"
# replace("!Hi! Hi!") === "!H!! H!!"
# replace("aeiou") === "!!!!!"
# replace("ABCDE") === "!BCD!"

def replace_vowel(s):
    vowels = "aeiouAEIOU"
    s = list(s)
    replaced = []
    for letter in s:
        for vowel in vowels:
            if letter == vowel:
                replaced.append("!")
                break 
        else:
            replaced.append(letter)
    return "".join(replaced)
    
   

print(replace_vowel("aeiou"))
print(replace_vowel("Hi!"))

# alternative
def replace_exclamation(s):
    return ''.join('!' if c in 'aeiouAEIOU' else c for c in s)

print(replace_exclamation("aeiou"))

# alternative using translate and maketrans (used together to replace characters - replace each with corresponding char in second argument)
def replace_exclamation_2(s):
    return s.translate(str.maketrans('aeiouAEIOU', '!!!!*!!!!!'))

print(replace_exclamation_2("aeiou"))
