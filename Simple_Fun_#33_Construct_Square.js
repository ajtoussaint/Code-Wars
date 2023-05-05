// Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering its characters and replacing them with digits (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.

// If there is no solution, return -1

// Examples
// "ab"  -->  81
// "zzz" -->  -1  // There are no 3-digit square numbers with identical digits
// "aba" --> 900  // It can be obtained after reordering the initial string into "baa"
// Input/Output
// [input] string s

// Constraints: 2 ≤ s.length < 10.
// [output] an integer

function constructSquare(s) {
    //coding and coding..
    let letters = {}
    s.split("").forEach( letter => {
      if(letters[letter]){
        letters[letter] += 1;
      }else{
        letters[letter] = 1;
      }
    });
    let squares = ["81"];
    let i = 10;
    while(squares[squares.length - 1].length <= s.length){
      squares.push((i*i).toString());
      i++;
    }
    squares = squares.filter( square => {
      return square.length === s.length;
    });
    let patterns = squares.map( square => {
      let numbers = {}
      square.split("").forEach( number => {
        if(numbers[number]){
          numbers[number] += 1;
        }else{
          numbers[number] = 1;
        }
      })
      return Object.values(numbers).sort( (a,b) => {
        return a-b;
      }).join("");
    })
    let sValues = Object.values(letters).sort( (a,b) => {
      return a-b;
    }).join("");
    let res = -1;
    patterns.forEach( (pattern,i) => {
      if(pattern === sValues){
        res = parseInt(squares[i]);
      }
    })
    return res;
  }