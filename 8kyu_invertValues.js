// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// You can assume that all values are integers. Do not mutate the input array/list.

function invertValue(arr) {
    return arr.map((num) => num > 0 ? -num : Math.abs(num))
    
}

console.log(invertValue([1,2,3,4,5]))
console.log(invertValue([1,-2,3,-4,5]))
console.log(invertValue([]))

// alternative
function invert(arr) {
    return arr.map(x => x * -1)
}

console.log(invert([1,2,3,4,5]))
console.log(invert([1,-2,3,-4,5]))
console.log(invert([]))
