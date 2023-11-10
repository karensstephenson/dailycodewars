// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a, b, c) {
   if (a < 1 || b < 1 || c < 1) {
    return false
   } else if (a+b > c && b+c > a && a+c > b){
    return true
   } else {
    return false
   }
}

console.log(isTriangle(-1,2,2))
console.log(isTriangle(7,2,2))
console.log(isTriangle(7,10,5))

// shorter alternative without testing for negative values
function isTriangle2(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;
}


