// An Array consisting of "0" and "1"'s also called a binary array is given as an input.
//
// Task
//
// Find the length of the longest contiguous subarray which consists of Equal number of "0"s and "1"s.
//
// Example
//
// s = [1,1,0,1,1,0,1,1]
//          |_____|
//             |
//          [0,1,1,0]
//
//          length = 4
// Note
//
// 1<=length(array)<120000


function binarray(a) {
  let max = 0;
  let hash = {}
  let sum = 0;
  for(let i = 0; i < a.length; i++){
    sum += 2*a[i] - 1;
    if(sum === 0){
      max = i + 1;
    }else if(hash[sum]>=0){
      max = max < i - hash[sum] ? i - hash[sum] : max;
    }else{
      hash[sum] = i;
    }
  }
  return max;
}
