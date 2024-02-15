// This kata is the first of a sequence of four about "Squared Strings".

// You are given a string of n lines, each substring being n characters long: For example:

// s = "abcd\nefgh\nijkl\nmnop"

// We will study some transformations of this square of strings.

//     Vertical mirror: vert_mirror (or vertMirror or vert-mirror)

//     vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

//     Horizontal mirror: hor_mirror (or horMirror or hor-mirror)

//      hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

// or printed:

// vertical mirror   |horizontal mirror   
// abcd --> dcba     |abcd --> mnop 
// efgh     hgfe     |efgh     ijkl 
// ijkl     lkji     |ijkl     efgh 
// mnop     ponm     |mnop     abcd 

// Task:

//     Write these two functions

// and

//     high-order function oper(fct, s) where

//     fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

// Examples:

// s = "abcd\nefgh\nijkl\nmnop"
// oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
// oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

// Note:

// The form of the parameter fct in oper changes according to the language. You can see each form according to the language in "Sample Tests".

function vertMirror(strng) {
    let arr = []
    let t = ""
    let s = strng.split("\n")
    for (let i = 0; i < s.length; i++) {
        
        for (let j = s[i].length-1; j >= 0; j--) {
            
            t += s[i][j]
        }
        arr.push(t)
        t = ""
    }
    return arr.join("\n")
}
function horMirror(strng) {
    let arr = []
    let t = ""
    let s = strng.split("\n")
    for (let i = s.length-1; i >= 0; i--) {
        
        arr.push(s[i])
    }
    return arr.join("\n")
}
function oper(fct, s) {
    if (fct == vertMirror) {
        return vertMirror(s)
    } else {
        return horMirror(s)
    }
}

console.log(horMirror("abcd\nefgh\nijkl\nmnop"))