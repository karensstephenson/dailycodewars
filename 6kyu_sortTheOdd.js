// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortOdd(arr) {
    let sorted = arr.filter(x => x % 2 === 1 || x % 2 === -1).sort((a,b) => a-b)
    arr.forEach((a,i) => {
        if (a % 2 === 1 || a % 2 === -1) {
            arr[i] = sorted[0]
            sorted.shift()
        }    
    })
    return arr
}

console.log(sortOdd([7,1]))
console.log(sortOdd([5, 8, 6, 3, 4]))
console.log(sortOdd([9, -8, -7, 6, 5, 4, 3, 2, 1, 0]))
console.log(sortOdd([5, 3, 2, 8, 1, 4]))

// alternative using map()
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
  }