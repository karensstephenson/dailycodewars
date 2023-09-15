// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let count = 0
    let word = str.split('');
    word.forEach((e) => {
        if (e === 'a' || e === 'e' || e === 'i'|| e === 'o'|| e === 'u') {
            count +=1
        }
    })
    return count
  }

  console.log(getCount('aeisptis'))
  console.log(getCount('aeiou'))

  //alternative also using filter() and includes()
  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   //alternative using a switch statement
   function getCount(str) {
    var vowelsCount = 0;
    for (index in str){
      switch (str[index]) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      vowelsCount++;
      break;
      }   
    }
    return vowelsCount;
