// In this Kata you will encode strings using a Soundex variation called "American Soundex" using the following (case insensitive) steps:
//
// Save the first letter. Remove all occurrences of h and w except first letter.
// Replace all consonants (include the first letter) with digits as follows:
// b, f, p, v = 1
// c, g, j, k, q, s, x, z = 2
// d, t = 3
// l = 4
// m, n = 5
// r = 6
// Replace all adjacent same digits with one digit.
// Remove all occurrences of a, e, i, o, u, y except first letter.
// If first symbol is a digit replace it with letter saved on step 1.
// Append 3 zeros if result contains less than 3 digits. Remove all except first letter and 3 digits after it
// Input
// A space separated string of one or more names. E.g.
//
// Sarah Connor
//
// Output
// Space separated string of equivalent Soundex codes (the first character of each code must be uppercase). E.g.
//
// S600 C560

var soundex = function(names) {
  return names.split(" ").map( name => {
    let nameArr = name.split("")
    //save the first letter
    let first = nameArr[0].toUpperCase();
    //filter removes all instances of w and h
    nameArr = nameArr.filter( letter =>{
      return letter.toLowerCase() !== 'w' && letter.toLowerCase() !== 'h';
    }).map( letter => {
      //map the letters to the corresponding numbers
      switch(letter.toLowerCase()){
          case 'b':
          case 'f':
          case 'p':
          case 'v': return '1';
          break;
          case 'c':
          case 'g':
          case 'j':
          case 'k':
          case 'q':
          case 's':
          case 'x':
          case 'z': return '2';
          break;
          case 'd':
          case 't': return '3';
          break;
          case 'l': return '4';
          break;
          case 'm':
          case 'n': return '5';
          case 'r': return '6';
          default : return "";
      }
    }).reduce( (final,letter) => {
      //consolidate duplicate letters
      if(final.length < 1){
        final.push(letter);
        return final;
      }
      if(final[final.length-1] === letter){
        return final;
      }else{
        final.push(letter);
        return final;
      }
    },[]);
    //for the purposes of replacing duplicates w and h do not count as a space, but for the purpose of inserting the first letter they do
    if(first === 'W' || first === 'H'){
      nameArr.unshift(first);
    }else{
      nameArr[0]=first;
    }
    //remove all the blank spaces
    nameArr = nameArr.filter( letter => letter.length > 0);
    //pad 0's
    while (nameArr.length < 4){
      nameArr.push("0");
    }
    //bring it all together
    return nameArr.join("").slice(0,4);
  }).join(" ");

}
