// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.
// Task

// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(w) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < w.length; i++) {
        if (i % 2 == 0) {
            sum1 += w[i]
        } else {
            sum2 += w[i]
        }
    }
    return [sum1, sum2]
}

console.log(rowWeights([1,2,3,4,5,6,7]))

// alternative using filter() and reduce()
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2==1).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }