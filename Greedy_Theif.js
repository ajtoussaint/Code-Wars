function greedyThief(items, n){
  //coding and coding..
  let sortedItems = [...items].sort( (a,b) => {
    return b.price/b.weight - a.price/a.weight === 0 ?
      b.price - a.price :
      b.price/b.weight - a.price/a.weight;
  });
  let i = 0;
  let bag = [];
  let bagWeight = 0
  while(i < sortedItems.length){
    if(bagWeight + sortedItems[i].weight <= n){
      bag.push(sortedItems[i]);
      bagWeight += sortedItems[i].weight;
    }
    i++;
  }

  return bag;

}
