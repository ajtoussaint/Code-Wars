// Magic Squares:
// Square has to follow such rules to be called Magic Square:
//
// Sum of values in each row is equal to x
// Sum of values in each column is equal to x
// Sum of values in (each of) diagonal is equal to x
// There is no duplicated numbers
// All numbers forms valid sequence arithmetic progression
// Example:
// Value of x should be same in all cases (sum of row / columns / diagonals) for given square.
//
// For such square:
//
// 8   1   6   -> 15
// 3   5   7   -> 15
// 4   9   2   -> 15
//
// |   |   |
// 15  15  15
// Our magic x is 15.
//
// Also both digonals sum-up to x:
//
// 8 + 5 + 2 = 15
//
// 4 + 5 + 6 = 15.
//
// Sequence of numbers in square (the arrangement of all numerical inputs in the 2D array in sequential order) are 1, 2, 3, 4, 5, 6, 7, 8, 9, so there is no duplicates and they form arithmetic progression with progression (gap) equal to 1.
//
// Our x has always same value, so given square is magic square.
//
// If any of conditions fails: it is NOT a magic square.
//
// Custom rules:
// There is additional rule, which our square has to follow to be called valid:
//
// Gap in sequence has to be equal to given function param: gap.
// For example described above (Example header), if param gap would be 1: square would be valid.
//
// If param gap would be 2 (or any other value which is not 1) - the square would NOT be valid.
//
// Note: proper sequence does NOT have to start from value: 1.
//
// E.g. sequence: 2, 3, 4, 5, 6, 7, 8, 9, 10 is also valid arithmetic progression with gap (difference between numbers) = 1.
//
// Your goal
// As a programmer you should implement method IsValid which will check all above conditions (of Magic square and custom rules) for us.
//
// If all conditions are met - return true, false otherwise.
//
// Inputs
// Inputs will always consist of:
//
// n x n array, where 2 < n < 10
// all array cells will be filled with integers
// gap will be always a positive integer
// Input example:
//
// square = [
//   [8, 1, 6],
//   [3, 5, 7],
//   [4, 9, 2],
// ];

function isValid(square, gap) {
  //check gap condition
  let allNums = [];
  square.forEach(row => {
    row.forEach(num => {
      allNums.push(num);
    })
  });
  allNums.sort( (a,b) => {
    return a-b
  })
  for(let i = 1; i < allNums.length; i++){
    if( allNums[i] - allNums[i-1] !== gap) return false;
  }
  //gap has been checked,
  let allSums = [];
  let trueDiag = 0;
  let otDiag =0;
  for(let col = 0; col < square.length; col++){
    let colTotal = 0;
    let rowTotal =0;
    for(let row = 0; row < square.length; row++){
      colTotal += square[row][col]
      rowTotal += square[col][row]
      if(row === col){
        trueDiag += square[row][col];
      }
      if(row + col === square.length - 1){
        console.log("OT DIAG: ", row, col, square[row][col])
        otDiag += square[row][col];
      }
    }
    allSums.push(colTotal);
    allSums.push(rowTotal);
  }
  allSums.push(trueDiag, otDiag);
  for(let j = 1; j < allSums.length; j++){
    if (allSums[j] !== allSums[0]) return false;
  }
  return true;

}
