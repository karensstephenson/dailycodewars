// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    text = text.split('')
    let number = 0
    let code = []
     
    while (number < n) {
        code = []
        for (i = 0; i < text.length; i++) {
        if (i % 2 == 1) {
            code.push(text[i])
        }        
       }
       for (i = 0; i < text.length; i++) {
        if (i % 2 == 0) {
            code.push(text[i])
        }        
       }      
       text = code
       number++ 
    }
    return code.join('')
}
console.log(encrypt("", 0))


function decrypt(text, n) {
    
    let number = 0
    let code = []
        
    while (number < n) {
        text1 = text.slice(0, Math.floor(text.length/2))
        text2 = text.slice(Math.floor(text.length/2))
        console.log(text1)
        console.log(text2)
        code = []
        for (let i = 0; i < text2.length; i++) {
            if (i < text2.length) {
               code.push(text2[i]) 
            }
            if (i < text1.length) {
               code.push(text1[i]) 
            }
            
        }  
        text = code
        number++ 
    }
    return code.join('')
}

console.log(decrypt(" Tah itse sits!", 3))

//works in my browser, but fails tests in codewars. Cannot see why it failed.
