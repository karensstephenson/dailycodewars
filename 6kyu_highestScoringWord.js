// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    strings = x.split(' ')
    counts = []
    for (let i = 0; i < strings.length; i++) {
        let sum = 0
        for (let j = 0; j < strings[i].length; j++) {
            sum += (strings[i].charCodeAt(j) - 96)    
        }
        counts.push(sum)
    }
    let highest = counts.indexOf(Math.max(...counts));
    return strings[highest]
    

}

console.log(high('man i need a taxi up to ubud'))