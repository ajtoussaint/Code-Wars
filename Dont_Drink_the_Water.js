// Don't Drink the Water

// Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------

// {                             {
//   { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
//   { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
//   { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
// }                             }
 
// The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.

function separateLiquids(glass) {
    const density = {
      H:1.36,
      W:1.00,
      A:.87,
      O:.8
    }
    
    const rowLength = glass[0] ? glass[0].length : 0;
    
    let sorted = glass.reduce( (total,row) => { 
      total.push(...row);
      return total
    },[]).sort( (a,b) => {
      return density[a] - density[b];
    });
    
    let sortedGlass = []
    for(let i=0; i<glass.length; i++){
      let row = [];
      for(let j=0; j<rowLength; j++){
        row.push(sorted[rowLength*i + j])
      }
      sortedGlass.push(row);
    }
  
  
    return sortedGlass;
}