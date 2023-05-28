// Task
// You know the slogan p, which the agitators have been chanting for quite a while now. Roka has heard this slogan a few times, but he missed almost all of them and grasped only their endings. You know the string r that Roka has heard.
//
// You need to determine what is the minimal number of times agitators repeated the slogan p, such that Roka could hear r.
//
// It is guaranteed the Roka heard nothing but the endings of the slogan P repeated several times.
//
// Example
// For p = "glorytoukraine", r = "ukraineaineaine", the output should be 3.
//
// The slogan was "glorytoukraine", and Roka heard "ukraineaineaine".
//
// He could hear it as follows: "ukraine" + "aine" + "aine" = "ukraineaineaine".
//
// Input/Output
// [input] string p
// The slogan the agitators chanted, a string of lowecase Latin letters.
//
// [input] string r
// The string of lowercase Latin letters Roka has heard.
//
// [output] an integer
// The minimum number of times the agitators chanted.

function slogans(p,r) {
  //coding and coding..
  let startl = Math.min(p.length,r.length);
  let startin = 0;
  let count = 0;
  for(let i = 0; startin < r.length; i++){
    if(p.slice(p.length - startl + i, p.length) === r.slice(startin,startin + startl-i)){
      count++;
      startin += startl - i;
      startl = Math.min(p.length,r.length-startin);
      i = -1;//resets to 0
    }
  }
  return count;
}
