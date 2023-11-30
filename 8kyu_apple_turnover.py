# Alan is known for referring to the temperature of the apple turnover as Hotter than the sun!. According to space.com the temperature of the sun's corona is 2,000,000 degrees Celsius, but we will ignore the science for now.
# Task

# Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

# Note: Input will either be a positive integer (or a string for untyped languages).

def apple(x):
    if int(x) * int(x) > 1000:
        return "It's hotter than the sun!!"
    else: 
        return "Help yourself to a honeycomb Yorkie for the glovebox."
    
# one line alternative
def apple2(x):
  return "It's hotter than the sun!!" if int(x) ** 2 > 1000 else  "Help yourself to a honeycomb Yorkie for the glovebox."