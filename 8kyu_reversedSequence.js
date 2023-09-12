// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reversedSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr
  };

  

  //alternative using Array() to create an array of size n, then fill to make each element a zero, then map using n minus index (e is the element which is not used in this case; i is the index), so if n=5 5-0, 5-1, 5,2, etc.  
  const reverseSeq = n => {
    return Array(n).fill(0).map((e, i) => n - i );
  }; 

  console.log(reverseSeq(5))