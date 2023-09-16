// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    str = str.toLowerCase().split('')
    let x = 0
    let o = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            x++
        } else if (str[i] === 'o') {
            o++
        }
    }
    if (x === o) {
        return true
    } else {
        return false
    }
}

//alternative using filter()
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

//alternative using split() at 'x' and 'o'