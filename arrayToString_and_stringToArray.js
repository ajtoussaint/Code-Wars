// Description:
// There is an array arr:
//
// [1,2,3,4,6,6,6,6,8,6,4,2]
// arr contains only integers(positive, negative or 0). The length of arr >= 3.
//
// Task1: Write a function arrayToString. Compress the array to a string:
//
// "1:4+1,6:4,8:4-2"
// explain:
// 1:4+1 ---> start number is 1, total 4 number,
//            Each number increases by 1
// 6:4   ---> number 6 repeat 4 times
// 8:4-2 ---> start number is 8, total 4 number,
//            Each number decreases by 2
// Note1: Only more than 2 numbers increasing, decreasing or the same to be compressed. Otherwise, output the original number. For example:
//
// arrayToString([2,1,6,12,5]) === "2,1,6,12,5"
// Note2: If there are two sequences are adjacent, and the number of the junction can be used by two sequences, then the left sequence give priority to the use of this number, unless it affects the compression of right sequence. Two examples:
//
// arrayToString([1,2,3,4,3,2,1]) === "1:4+1,3:3-1"
// (Should not compress to "1:3+1,4:4-1")
// arrayToString([1,2,3,4,3,2]) === "1:3+1,4:3-1"
// (Should not compress to "1:4+1,3,2")
// Note3: It should works for negative integers too:
//
// arrayToString([-1,-2,-3,-4,-3,-2]) , "-1:3-1,-4:3+1")
// Task2: Write a function stringToArray. Decompress the string(like the result above) to an array(like the arr above). The inputs of function always be a valid string.
//
// Examples of stringToArray:
//
// stringToArray("1:4+1,6:4,8:4-2") === [1,2,3,4,6,6,6,6,8,6,4,2]
//
// stringToArray("2,1,6,12,5") === [2,1,6,12,5]
//
// stringToArray("1:4+1,3:3-1") === [1,2,3,4,3,2,1]
//
// stringToArray("1:3+1,4:3-1") === [1,2,3,4,3,2]
//
// stringToArray("-1:3-1,-4:3+1") , [-1,-2,-3,-4,-3,-2])

function arrayToString(arr){
  let myStr = "";
  for(let i =0; i<arr.length; i++){
    //if we are running out of length just add the number
    if(i+2 >= arr.length){
      myStr += arr[i] + ",";
    }else{
      let dif = arr[i+1] - arr[i];
      if(arr[i+2] - arr[i+1] === dif){
        //need to compress
        let compStart = arr[i];
        let compCount = 3;
        i++;
        while(arr[i+2] - arr[i+1] === dif){
          compCount++;
          i++;
        }
        i++; //need one more because we looked ahead
        let compMod = dif > 0 ?
            "+" + dif:
            dif < 0 ?
              dif :
              "";
        //if comp count is 4 try to share 1 ahead
        //at this point i is looking at the next unexplored space
        if(compCount >= 4 && i+1 < arr.length){
          //also checked that there are 2 spaces ahead
          //if those two spaces and our last space are a sequence
          if(arr[i] - arr[i+1] === arr[i+1] - arr[i+2] && arr[i+1] - arr[i+2] != arr[i+2] - arr[i+3]){
            //decrement i and compCount
            i--;
            compCount--;
          }
        }
        myStr += compStart + ":" + compCount + compMod + ",";
      }else{
        myStr += arr[i] + ",";
      }//just add the number
    }
  }
  return myStr.replace(/,$/g,"");
  //remove comma at end of myStr
}
function stringToArray(str){
  return str.split(",").reduce( (acc,data) => {
    if(data.indexOf(":")<0){
      acc.push(parseInt(data));
      return acc;
    }else{
      //need to decompress
      let[,start,count,mod] = data.match(/(-?\d+):(-?\d+)((\+|\-)\d+)?/).map(x => parseInt(x));
      acc.push(start);
      for(let i = 0; i<count-1; i++){
        if(mod){
          start += mod;
        }
        acc.push(start);
      }
      return acc;
    }
  },[]);
}
