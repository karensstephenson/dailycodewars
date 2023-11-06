// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
    return str.replace(/[^a-z]/gmi, "").split('').reverse().join('')
}

console.log(reverseLetter("krishan"))
console.log(reverseLetter("ultr53o?n"))

// alternative using match
const reverseLetter2 = str => str.match(/[a-z]/g).reverse().join('');