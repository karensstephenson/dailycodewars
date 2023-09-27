// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicates(str) {
    const counts = {};
    let duplicates = 0;
    str.toLowerCase().split('').forEach(x => {
        counts[x] = (counts[x] || 0) + 1   //if character already in object, returns count of that character; if not returns 0; then adds 1 to the character count 
    })
    for (const x in counts) { //loops through the object
        if (counts[x] > 1) {
            duplicates++
        }
    }
    
    return duplicates
}

//alternative using filter() and indexOf()
function duplicateCount2(text){
    return text.toLowerCase().split('').filter(function(val, i, arr){
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
  }



console.log(duplicates("abcde"))
console.log(duplicates("indivisibility"))
console.log(duplicates("aabBcde"))
