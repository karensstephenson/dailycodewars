# Examples (Input -> Output)

# * [1, 2, 3, 4]  -> [4, 3, 2, 1]
# * [9, 2, 0, 7]  -> [7, 0, 2, 9]

def reverse_list (nums: list):
    nums.reverse()
    return nums
    

print(reverse_list([1,2,3,4]))

# alternative negative index slicing (from first to last in steps of 1 in reverse order)
def reverse_list2(l):
  return l[::-1]

# alternative reverses argument and returns as a list
def reverse_list3(l):
  return list(reversed(l))

