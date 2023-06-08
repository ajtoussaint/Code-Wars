function greedyThief(items, n){
  //credit to Geeks for Geeks: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
  let length = items.length;
  let table = new Array(length+1);//maybe start empty and push, more my style
  for(let i = 0; i <= length; i++){
    table[i] = new Array(n+1);//maybe start empty and push, more my style
    for(let w = 0; w <= n; w++){
      //base case, now weight or no items = 0 value
      if(i == 0 || w == 0){
        table[i][w] = 0;
      }else if(items[i-1].weight <= w){
        //if the i^th (index i-1) item in the array fits this columns weight limit...
        table[i][w] = Math.max(items[i-1].price + table[i-1][w-items[i-1].weight], table[i-1][w]);
        /*
        the value of a knapsack considering the first i items given and a max weight w
        will be the maximum of:
        the value of the newly added item PLUS the value in the same column that
        only considers a weight low enough that the new item can fit exactly into the set without overflowing
        */
      }else{
        //if the item is too heavy on its own:
        table[i][w] = table[i-1][w];
        //this value in the table will be the same as before the item was considered
      }
    }
  }
  console.log(table);
  return table[length][n];
}
