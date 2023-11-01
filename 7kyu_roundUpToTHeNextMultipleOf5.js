// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.

function roundToFive (n) {
    return n % 5 === 1 || n % 5 === -4 ? n + 4 : n % 5 === 2 || n % 5 === -3 ? n + 3 : n % 5 === 3 || n % 5 === -2 ? n + 2 : n % 5 === 4 || n % 5 === -1 ? n + 1 : n
}

// alternative using ceil():
function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }

// alternative using while
function roundToNext5_2(n){
    while(n % 5 !== 0) n++;
    return n;
  }