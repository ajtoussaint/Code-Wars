// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr){
    //This covers the [] case
    let max = 0;
    //check all sub arrays from arr.length to 1
    for(let i=arr.length; i>0; i--){
      //start with sub array at the 0 position of arr and move up to 1 position etc.
      for(let j=0; (j+i)<=arr.length; j++){
        //sum the integers in the sub array
        let sum =0;
        for(let k=0; k<i; k++){
          sum += arr[k+j]
        }
        //replace the max if the sum of the sub array is higher
        if(sum>max) max = sum;
      }
    }
    return max;
  }