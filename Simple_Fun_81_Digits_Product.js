// Task
// Given an integer product, find the smallest positive integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
//
// Example
// For product = 1, the output should be 11;
//
// 1 x 1 = 1 (1 is not a valid result, because it has only 1 digit)
//
// For product = 12, the output should be 26;
//
// 2 x 6 = 12
//
// For product = 19, the output should be -1.
//
// No valid result found.
//
// For product = 450, the output should be 2559.
//
// 2 x 5 x 5 x 9 = 450
//
// For product = 581, the output should be -1.
//
// No valid result found.
//
// Someone says the output should be 783, because 7 x 83 = 581.
//
// Please note: 83 is not a DIGIT.
//
// Input/Output
// [input] integer product
//
// Constraints: 0 ≤ product ≤ 600.
//
// [output] a positive integer

function digitsProduct(product) {
  let factors = [];
  let number = product;
  let foundFactor= true;
  while (product >= 10 && foundFactor){
    foundFactor = false;
    for(let i = 9; i>1; i--){
      if(number%i === 0 && i < number && number > 9){
        factors.push(i.toString());
        number /= i;
        foundFactor = true;
        i = 9;
      }
    }
  }
    if(factors.length === 0) factors = ['1'];
    factors.push(number.toString());
    for(let j=0; j<factors.length; j++){
      if(factors[j].length > 1) return -1;
    }
    return parseInt(factors.sort( (a,b) => {
      if(a == 0){
        return 1;
      }
      if(b == 0){
        return -1;
      }
      return a - b;
    }).join(""));
}
