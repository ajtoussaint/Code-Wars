function binarray(a) {
    let ones = a.join("").match(/1/g);
    let zeroes = a.join("").match(/0/g);
    //if there is only 1s or 0s in the array then the answer is 0
    if(!ones || !zeroes) return 0;
    
    //largest possible array size is the smaller of 1s or 0s x2
    let size = 2*Math.min(ones.length,zeroes.length);
  
    //array must be even length
    if(size % 2 !== 0)size--;
    //found max size
    
    //find how many extra 1s or zeroes there are
    let balance = 0;
    for(let k=0; k < size; k++){
      balance += 2*a[k]-1;
    }
    
    //balance will be an even number
    //-2 for each extra 0, +2 for eache extra 1
    //Ex: [1,1,1,0] => 2 so removing a 1 (-1) and adding a 0 (+(-1)) will restore balance
    for(let i=size; i>0; i-=2){
      if(balance === 0) return i;
      let newBalance = balance;
      //shift the array by one position along the parent
      let j = 0;
      while(j+i < a.length){
        newBalance += (2*a[i+j] -1) - (2*a[j]-1);
        if(newBalance === 0)return i;
        j++;
      }
      //if no array of this size is balanced...
      //reduce size by 2
        //implicit in loop
      //remove the last 2 inputs from balance
      balance -= 2*a[i-1] - 1;
      balance -= 2*a[i-2] - 1;
    }
    return 0;
  }

  //WIP
  function binarray(a) {
    let ones = a.join("").match(/1/g);
    //if there is only 1s or 0s in the array then the answer is 0
    if(!ones || ones.length === a.length) return 0;
    
    //determine which is less common 1 or 0 and save it
    console.log("m rep", ones.length, a.length/2)
    let minority = ones.length < a.length/2 ? 1 : 0; //zero will be minority if even
    
    //find all of the less common indexes and save in an array
    let indecies = [];
    for(let i=0; i<a.length; i++){
      if(a[i] === minority)indecies.push(i);
    }
    
    //find the largest possible even array
    //largest possible array size is the smaller of 1s or 0s x2
    let size = 2*Math.min(ones.length,a.length - ones.length);
    //array must be even length
    if(size % 2 !== 0)size--;
    console.log(a,minority,size, indecies)
    
    //for this array size
     //check if the array capturing the 0th indicies and the size/2th indicies
     // if so return the size
    //loop through index array and then reduce the size by 2
    while(size > 0){
      for(let j=0; j+size/2<=indecies.length; j++){
        console.log("J", j, "SIZE:", size);
        if(indecies[j+size/2-1] - indecies[j] <= size){
          let precede = j === 0 ? 0 : indecies[j] - indecies[j-1] -1;
          let follow = j+size/2 === indecies.length ? 0 : indecies[j+size/2] - indecies[j+size/2-1]-1;
          if(indecies[j+size/2-1] - indecies[j]  + precede + follow >= size){
            return size;
          }
        }
      }
      size -= 2;
    }
   return 0;
  }
  