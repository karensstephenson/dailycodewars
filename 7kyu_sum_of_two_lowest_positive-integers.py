# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

# For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

# [10, 343445353, 3453445, 3453545353453] should return 3453455.

def sumIntegers(arr):
    arr = [ele for ele in arr if ele > 0] # not needed as only positive integers given
    arr.sort()
    return arr[0] + arr[1]

print(sumIntegers([19, 5, -42, 2, 77]))

# alternative using sum and sorted
def sum_two_smallest_numbers(numbers):
    return sum(sorted(numbers)[:2])

