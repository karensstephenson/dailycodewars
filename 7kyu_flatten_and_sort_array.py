# Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

# Example:

# Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

def flatten_sort(arrays):
    nums = []
    for array in arrays:
        for num in array:
            nums.append(num)
    nums.sort()
    return nums

print(flatten_sort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]))

# alternative using sorted()
def flatten_and_sort(array):
    return sorted([j for i in array for j in i])