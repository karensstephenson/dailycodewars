// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
    let charObj = {}
    for (let char of string) {
        if (charObj[char]) {
            charObj[char] += 1
        } else {
            charObj[char] = 1
        }
    }
    return charObj
}

console.log(count(""))
console.log(count("a"))
console.log(count("ab"))
console.log(count("aba"))
console.log(count("ABC"))

// alternative using an array
function count2 (string) {  
    let count = {};
    string.split('').forEach(function(s) {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }

// alternative using an array and reduce
function count3 (string) {
    return string.split('').reduce((counts, char) => {
        counts[char] = (counts[char]||0) + 1
        return counts
    }, {})
}
console.log(count3(""))
console.log(count3("a"))
console.log(count3("ab"))
console.log(count3("aba"))
console.log(count3("ABC"))