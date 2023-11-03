# Complete the square sum function so that it squares each number passed into it and then sums the results together.

# For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

def square_sum(l):
    sum = 0
    for i in l:
        sum += i**2
    return sum

print(square_sum([1,2,3]))

# alternative
def square_sum_2(numbers):
    return sum(x ** 2 for x in numbers)

print(square_sum([1,2,3]))

# alternative using map() and lambda function
def square_sum_3(numbers):
    return sum(map(lambda x: x**2, numbers))

# alternative using numpy
# import numpy
# def square_sum_4(numbers):
#     return sum(numpy.array(numbers) ** 2)

# print(square_sum_4([1,2,3]))