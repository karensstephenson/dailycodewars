// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.

function difference (a, b) {
    return Math.abs(a[0]*a[1]*a[2] - b[0]*b[1]*b[2]) 
}