// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function(triplets) {
    //TODO:
    let letters ={};
    //pushes a letter to an array without creating a duplicate and returns 1 if the push was successfull
    function carefulPush(arr, item){
      if(arr.indexOf(item)<0){
        arr.push(item);
        return 1;
      }else{
        return 0;
      }
    }
    
    //go through the triplets documenting each letter and what is know to come after it
    triplets.forEach( triplet => {
      triplet.forEach( (letter,index) => {
        if(!letters[letter]){
          letters[letter] = [];
        }
        let i = index + 1;
        while(i < triplet.length){
          carefulPush(letters[letter], triplet[i]);
          i++;
        }
      })
    })
    
  
    //until a steady state is reached, for each letter: check the letters know to come after it, 
    //add the letters that come after that letter to the letters known to come after the original letter
    let flag = 1;
    while(flag > 0){
      flag = 0;
      Object.keys(letters).forEach(letter => {
        letters[letter].forEach(antecedent => {
          letters[antecedent].forEach( subAntecedent => {
            flag += carefulPush(letters[letter], subAntecedent);
          })
        })
      })
    }
    
   //sort the letters so that the one with the most letters known to come after it is first.
   return Object.keys(letters).sort( (a,b) => {
     return letters[b].length - letters[a].length 
   }).join("")
  }