//multiply each element of the array in turn
// for example [1,2,3,4] = 1 * 2 * 3 * 4

let product = 1
function grow(x){
  for (let i = 0; i < x.length; i++ ) {
     product *= x[i]   
  }
  return product
}

console.log(grow([1,2,3]))

//similar using 'x.reduce()'
// function grow(x){
//     return x.reduce((a,b)=>a*b)
// }  