function greedyThief(items, n){
  function bagCombos(itemList, weight){
    if (itemList.length === 0){
      return [[]];
    } 
    if (itemList.length === 1 && itemList[0].weight < weight){
      return [itemList,[]];
    } 
    //if there is more than 1 item in the list...
    let subCombos = bagCombos([...itemList.slice(1,itemList.length)],weight)
    let newCombos = [...subCombos];
    subCombos.forEach(combo => {
      let totalWeight = 0;
      combo.forEach(item => {
        totalWeight += item.weight || 0;
      })
      if(totalWeight + itemList[0].weight <= weight){
        newCombos.push([...combo,itemList[0]])
      }
    })
    return newCombos
  }

  return bagCombos(items,n).reduce( (best,combo) => {
    let total = 0;
    combo.forEach(item => {
      total += item.price;
    })
    return total > best[0] ? [total,combo] : best;
  },[0,[]])[1];

  
}
