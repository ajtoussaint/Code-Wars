// Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

// Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.


// Before the game begins, players set up the board and place the ships accordingly to the following rules:
// There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
// Each ship must be a straight line, except for submarines, which are just single cell.

// The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

// This is all you need to solve this kata. If you're interested in more information about the game, visit this link.

function validateBattlefield(field) {
  let ships = {
    4:0,
    3:0,
    2:0,
    1:0
  }
  
  //check for diagonals 
  for (let c = 0; c < 10; c++){
    for (let r = 0; r < 10; r++){
      if(field[c][r] === 1){
        if(c != 9 && r !=9){
          if(field[c+1][r+1] === 1) return false;
        }
        if(c != 0 && r != 9){
          if(field[c-1][r+1] === 1) return false;
        }
        if(c != 9 && r !=0){
          if(field[c+1][r-1] === 1) return false;
        }
      }
    }
  }
  
  let myField = [...field];

  
  //go until you find a 1
  for (let column = 0; column < 10; column++ ){
    for(let row = 0; row < 10; row++){
      if(myField[column][row] === 1 ){
        //found a ship
        let cSize = 1;
        //check your corners
        if(column != 0){
          if (myField[column-1][row+1] === 1) return false;
        }
        if(row != 0){
          if(myField[column+1][row-1] === 1) return false;
        }
        if(column != 9 && row != 9){
          if(myField[column+1][row-1] === 1) return false;
        }
        if(column != 9){
          while(myField[column + cSize][row] === 1){
            myField[column+cSize][row] = 0;
            cSize++;
          }
          
        }
        let rSize = 1;
        if(row != 9){
          while(myField[column][row+rSize] === 1){
            myField[column][row+rSize] = 0;
            rSize++;
          }
        }
        //prevents L shapes
        if(Math.min(rSize,cSize) > 1) return false;
        ships[Math.max(rSize,cSize)]++;
      }
    }
  }
  return (ships[4] === 1 && ships[3] === 2 && ships[2] === 3 && ships[1] === 4)
}
