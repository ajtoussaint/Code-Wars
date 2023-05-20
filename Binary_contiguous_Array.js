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