// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.
// Example

// alphabetPosition("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function replaceWithPosition(str) {
    let positions = []
    str = str.toLowerCase()
    console.log(str)
    for (let i = 0; i< str.length; i++) {
        if (!(str[i] >= "a" && str[i] <= "z")) {
            continue;
        } else {
            let position = str.charCodeAt(i) - 96 
            positions.push(position)
        }
    }
    return positions.join(' ')
}

console.log(replaceWithPosition("The sunset sets at twelve o' clock."))

// alternative using map(): uppercase, remove other characters, split into array, map each to character code, join back to a string
let alphabetPosition = (text) => text.toUpperCase().replace(/[^A-Z]/g, '').split('').map(ch => ch.charCodeAt(0) - 64).join(' ');