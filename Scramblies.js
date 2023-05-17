// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
// Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  let bank = {};
  str2.split("").forEach(letter => {
    if(bank[letter]){
      bank[letter]++;
    }else{
      bank[letter] = 1;
    }
  });
  let arr = Object.keys(bank);
  for( let i = 0 ; i<arr.length; i++){
    let inStr1 = str1.match(new RegExp(arr[i],'g'))
    if(!inStr1) return false
    if(inStr1.length < bank[arr[i]]){
      return false;
    }
  }
  return true;

}
