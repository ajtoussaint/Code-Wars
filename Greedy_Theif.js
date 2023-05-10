function greedyThief(items, n){
  class Bag{
    constructor(contents, possible, weight, limit, price){
      this.contents = contents;
      this.possible = possible;
      this.weight = weight;
      this.limit = limit;
      this.price = price;
    }
    transfer(index){
      let newWeight = this.weight + this.possible[index].weight;
      let newPrice = this.price + this.possible[index].price;
      if(newWeight <= this.limit){
        let newContents = [...this.contents, this.possible[index]];
        let newPossible = [...this.possible];
        newPossible.splice(index,1);
        let newBag = new Bag(newContents, newPossible, newWeight, this.limit, newPrice);
        return newBag;
      }else{
        let newContents = [...this.contents];
        let newPossible = [...this.possible];
        newPossible.splice(index,1);
        let newBag = new Bag(newContents, newPossible, this.weight, this.limit, this.price);
        return newBag;
      }
    }
  }
  //end class def
  function bagSame(bag1, bag2){
    let arr1 = bag1.contents.sort( (a,b) => {
      return a.weight - b.weight === 0 ?
        a.price - b.price :
        a.weight - b.weight;
    })
    let arr2 = bag2.contents.sort( (a,b) => {
      return a.weight - b.weight === 0 ?
        a.price - b.price :
        a.weight - b.weight;
    })
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++){
      if(arr1[i].weight !== arr2[i].weight || arr1[i].price !== arr2[i].price){
        return false
      }
    }
    return true;
  }
  //end bagSame def

  //start with empty bag
  let bagList = [];
  let startingBag = new Bag([],items,0,n,0);
  bagList.push(startingBag);

  function advPush(arr, bag){

    let duplicate = false;
    arr.forEach( obj => {

      if (bagSame(obj,bag)){

        duplicate = true;
      }
    })
    if(!duplicate) arr.push(bag);
    return !duplicate;
  }

  //add each possible addition to a list of bags
  for(let k = 0; k < items.length; k++){
    //console.log("...")
    let newBagList = [];
    bagList.forEach( bag => {
      for(let j = 0; j < bag.possible.length; j++){
        let fullerBag = bag.transfer(j)
        if(fullerBag){
          advPush(newBagList,fullerBag)
        }
      }
    })
    bagList = [...newBagList];
  }
  let res = bagList.sort( (a,b) => {
    return b.price - a.price;
  })[0].contents;
  //console.log(res);
  return res;
  //if it is already on the list do not duplicate
}
