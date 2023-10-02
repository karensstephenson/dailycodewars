// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)
// Examples

// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
    for (let i = 0; i < numbers.length-2; i++) {
        if (numbers[i] === numbers[i+1] && numbers[i+1] === numbers[i+2]) {
            continue
        }
            if (numbers[i] === numbers[i+1]) {
                return numbers[i+2]
            } else if (numbers[i] === numbers[i+2]) {
                return numbers[i+1]
            } else {
                return numbers[i]
            }
    }
  }

console.log(stray([17, 17, 3, 17, 17, 17, 17]))
console.log(stray([1,1,2]))
console.log(stray([2,1,1,1,1,1,1,1,1,1]))

// alternative using sort()
//sort and check if first two numbers are not same, if they are not, it means first number is different one, if they are, it means the last number is the different one.
function stray(numbers) {
    var a = numbers.sort();
    
    if(a[0] != a[1]) {
      return a[0]
    } 
    return a[a.length-1]
  }

 // alternative using indexOf() and lastIndexOf()
 //if number occurs only once, index of first and last instance will be the same
 function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }