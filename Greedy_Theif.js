// Description:
// In a dark, deserted night, a thief entered a shop. There are some items in the room, and the items have different weight (in kg) and price (in $).

// The thief is greedy, his desire is to take away all the goods. But unfortunately, his bag can only hold n kg of items. So he has to make a choice, try to take away more valuable items.

// Please complete the function to help the thief to make the best choices. Two arguments will be given: items (an array that contains all items) and n (the maximum weight the package can accommodate).

// The list of items is provided as an array of objects:

// [
//   {weight:2, price:6},
//   ...
// ]
// The result should be a list of the original items that the thief should take away and that has the maximum possible total price.

// Notes:

// Order of the items in the output do not matter
// If more than one valid solutions exist, you should return one of them
// If no valid solution should return []
// You should not modify argument items or the items themselves (in languages where they are mutable).
// Pay attention to performance: the thief doesn't have all night to decide what to take or not!
// Examples
// For a list of the following available items:

// weight	price
// 2	6
// 2	3
// 6	5
// 5	4
// 4	6
// ... and with a maximum weight of n=10, the best option could be a total price of 15$, collecting the following items:

// weight	price
// 2	6
// 2	3
// 4	6

function greedyThief(items, n){
  //credit to Geeks for Geeks: https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/
  let length = items.length;
  let table = new Array(length+1);
  for(let i = 0; i <= length; i++){
    table[i] = new Array(n+1);
    for(let w = 0; w <= n; w++){
      //base case, no items = 0 value
      if(i == 0){
        table[i][w] = [0,[]];
      }else if(items[i-1].weight <= w){
        //if the i^th (index i-1) item in the array fits this columns weight limit...
        if(items[i-1].price + table[i-1][w-items[i-1].weight][0] > table[i-1][w][0]){
          //if the new value when adding this item as efficiently as possible is greater than the previous value:
          table[i][w] = [items[i-1].price + table[i-1][w-items[i-1].weight][0], [...table[i-1][w-items[i-1].weight][1], items[i-1]]]
          //set that table value to [old value + new items value, old item list + new item]
        }else{
          //if adding this item does not increase value use the previous setup
          table[i][w] = table[i-1][w];
        }
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
  return table[length][n][1];
}
