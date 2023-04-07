// A format for expressing an ordered list of integers is to use a comma separated list of either
//
// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.
//
// Example:
//
// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"

function solution(list){
  let myStr ="";
  for(let i=0; i < list.length; i++){
    if((list[i+1] === list[i] + 1) && (list[i+2] === list[i] + 2)){
      let rangeLength = 2;
      while(list[i + rangeLength] === list[i] + rangeLength){
        rangeLength++;
      }
      rangeLength -= 1;
      myStr += list[i] + "-" + list[i+rangeLength] + ","
      i += rangeLength;
    }else{
      myStr += list[i] + ",";
    }
  }
  //removes final comma
  return myStr.slice(0,myStr.length-1);
}
