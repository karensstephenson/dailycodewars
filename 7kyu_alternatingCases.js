// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalise(s) {
    let t = ""
    let x = ""
for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
     t += s[i].toUpperCase()
    } else {
     t += s[i]
    }
 }
 for (let i = 0; i < s.length; i++) {
     if (i % 2 == 1) {
      x += s[i].toUpperCase() 
     } else {
      x += s[i]
     }
  }
    return [t, x]
}



console.log(capitalise("abcdef"))


// alternative using map()
function capitalise2(s){
    const even = s.split("").map((x, i) => i % 2 === 0 ? l.toUpperCase() : x).join("")
    const odd = s.split("").map((x, i) => i % 2 !== 0 ? l.toUpperCase() : x).join("")
    return [even, odd]
  };

