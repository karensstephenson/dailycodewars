# Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

# Return your answer as a number.

def sum_array(arr):
    return sum([int(x) for x in arr])
   

print(sum_array(["1", 2, "3", 4]))

# alternative using map()
def sum_mix(arr):
    return sum(map(int, arr))

print(sum_mix(["1", 2, "3", 4]))