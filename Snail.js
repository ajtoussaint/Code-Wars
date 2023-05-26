// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function(array) {
    console.log("SNAILING: ", array);
    // enjoy
    let length = array.length;
    if(length === 1)return array[0];
    
    let top = array[0];
    let bottom = array[length -1];
    bottom = bottom.reverse();
    let right = [];
    let left = [];
    let newArr = []
    for(let i =1; i< length -1; i++){
      right.push(array[i][length - 1])
      left.unshift(array[i][0]);
      newArr.push(array[i].slice(1,length-1))
    }
    return newArr.length > 0 ? 
      [...top, ...right, ...bottom, ...left, ...(snail(newArr))] :
      [...top, ...right, ...bottom, ...left]
  }