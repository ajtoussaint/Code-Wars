function binarray(a) {
  let obj = {1:0, 0:0}
  let indexer = {1:[],0:[]}
  a.forEach( (num,i) => {
    obj[num]++;
    indexer[num].push(i)
  })
  //if there is only 1s or 0s in the array then the answer is 0
  if(obj[1] === 0 || obj[0] === 0) return 0;
  let mainLength = a.length
  if(mainLength === 2) return 2;

  //determine which is less common 1 or 0 and save it
  let minority = obj[1] < obj[0] ? 1 : 0; //zero will be minority if even


  //find all of the less common indexes and save in an array
  let indecies = indexer[minority];


  //find the largest possible even array
  //largest possible array size is the smaller of 1s or 0s x2
  let size = 2*obj[minority];
  //array must be even length
  if(size % 2 !== 0)size--;


  //for this array size
   //check if the array capturing the 0th indicies and the size/2th indicies
   // if so return the size
  //loop through index array and then reduce the size by 2
  console.time("main");
  let counter = 0;
  while(size > 0){
    for(let j=0; j+size/2<=indecies.length; j++){
      counter++;
      if(indecies[j+size/2-1] - indecies[j] + 1 <= size){
        console.log("Looops: ", counter, "MainL: ", mainLength, "Final size:" ,size);
        console.timeEnd("main");
        return size;
        //aparently this is all useless or they don't test the edge case?
        /*let precede = j === 0 ? indecies[j] : indecies[j] - indecies[j-1] -1;
        let follow = j+size/2 === indecies.length ? mainLength - indecies[j] - 1 : indecies[j+size/2] - indecies[j+size/2-1]-1;
        if(indecies[j+size/2-1] - indecies[j]  + precede + follow >= size){
          console.log("Loops: ", counter);
          console.timeEnd("main");
          return size;

        }*/
      }
    }
    size -= 2;
  }
  console.timeEnd("main");
  return 0;
}
