// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function uniqueInOrder (seq) {
    let newArr = []
    if (seq.length === 0) return newArr
    newArr.push(seq[0])
    for (let i = 1; i < seq.length; i++) {
        if (seq[i] !== seq[i-1]) {
            newArr.push(seq[i])
        }
    }
    return newArr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))
console.log(uniqueInOrder([]))

// shorter alternative using filter()
var uniqueInOrder2=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}