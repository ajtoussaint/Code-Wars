//Incomplete

function validateBattlefield(field) {
  let ships = {
    4:0,
    3:0,
    2:0,
    1:0
  }

  let myField = [...field];

  //go until you find a 1
  for (let column = 0; column < 10; column++ ){
    for(let row = 0; row < 10; row++){
      if(myField[column][row] === 1 ){
        //found a ship
        let cSize = 1;
        if(column != 9){
          //check corners
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
        console.log(cSize, rSize);
        ships[Math.max(rSize,cSize)]++;
        console.log(ships);
      }
    }
  }
  return (ships[4] === 1 && ships[3] === 2 && ships[2] === 3 && ships[1] === 4)
}
