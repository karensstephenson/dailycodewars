// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"

function isAnagram (test, original) {
    test = test.toLowerCase()
    original = original.toLowerCase()
    for (let i = 0; i < test.length; i++) {
        if (original.includes(test[i])) {
            original = original.replace(test[i], "")
        } else {
            return false
        }
    }
    return (original.length === 0)     
}

console.log(isAnagram("foefet", "toffee"))
console.log(isAnagram("Buckethead", "DeathCubeK"))
console.log(isAnagram("ound", "round"))

// alternative is to split, sort, join and then compare
var isAnagram2 = function(test, original) {
    var t = test.toLowerCase().split('').sort().join('')
    var o = original.toLowerCase().split('').sort().join('')
    return (t==o)
  }
