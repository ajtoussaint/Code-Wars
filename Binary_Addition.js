// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)

function addBinary(a,b) {
  let x = a + b;
  let n=0;
  while(2**n <= x){
    n++
  }
  n--
  let arr =[]
  console.log(n,x,arr);
  for(i=n; i>=0; i--){
    if( 2**i > x){
      arr.push("0");
    }else{
      arr.push("1")
      x -= 2**i;
    }
    console.log(i,x,arr);
  }
  return arr.join("")
}