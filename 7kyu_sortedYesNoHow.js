// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSorted(arr) {
    return arr.every((x,i)=>i==0||arr[i]>=arr[i-1]) ? 'yes, ascending': arr.every((x,i)=>i==0||arr[i]<=arr[i-1]) ? 'yes, descending' : 'no'
}


// alternative using sort(), reverse() and join()
function isSorted2(arr) {
    a = arr.join("")
    return a == arr.sort().join("") ? "yes, ascending" : a === arr.sort().reverse().join("") ? "yes, descending" : "no"
}



