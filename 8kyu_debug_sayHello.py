# Debugging sayHello function

# The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

# Example output:

# Hello, Mr. Spock

def sayHello(name):
    return "Hello, {}".format(name)

#alternative using f instead of .format
def say_hello(name):
    return f"Hello, {name}"