# Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

# For example: (Input --> Output)

# 10 --> 1
# 99 --> 18
# -32 --> 5

# Let's assume that all numbers in the input will be integer values.
import functools
def sum_digits(number):
    numbers = [int(i) for i in str(abs(number))]
    return functools.reduce(lambda x, y: x + y, numbers)

print(sum_digits(-32))

# alternative with sum()
def sumDigits(number):
    return sum(int(d) for d in str(abs(number)))