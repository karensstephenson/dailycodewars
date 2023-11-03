# Write a function which calculates the average of the numbers in a given list.

# Note: Empty arrays should return 0.

def avg(arr):
    if len(arr) < 1:
        return 0
    else:
        return sum(arr) / len(arr)
    
# alternative
def find_average(array):
    return sum(array) / len(array) if array else 0
