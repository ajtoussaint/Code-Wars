// Common denominators

// You will have a list of rationals in the form

// { {numer_1, denom_1} , ... {numer_n, denom_n} } 
// or
// [ [numer_1, denom_1] , ... [numer_n, denom_n] ] 
// or
// [ (numer_1, denom_1) , ... (numer_n, denom_n) ] 
// where all numbers are positive ints. You have to produce a result in the form:

// (N_1, D) ... (N_n, D) 
// or
// [ [N_1, D] ... [N_n, D] ] 
// or
// [ (N_1', D) , ... (N_n, D) ] 
// or
// {{N_1, D} ... {N_n, D}} 
// or
// "(N_1, D) ... (N_n, D)"
// depending on the language (See Example tests) in which D is as small as possible and

// N_1/D == numer_1/denom_1 ... N_n/D == numer_n,/denom_n.
// Example:
// convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
// Note:
// Due to the fact that the first translations were written long ago - more than 6 years - these first translations have only irreducible fractions.

// Newer translations have some reducible fractions. To be on the safe side it is better to do a bit more work by simplifying fractions even if they don't have to be.


function convertFrac(lst){
    //this case is not described in the instructions
    if (lst.length <= 0){
      return "";
    }
    
    //Find greatest common denominator of the set
    //(I had to look up these algorithms)
    function gcd(x, y){
      if (x === 0) return y;
      return gcd(y % x, x);
    }
    function lcm(x, y){
      return (x * y) / gcd(x, y);
    }
    
    let lstLCM = lst.reduce( (currentLCM, tuple) => {
      return lcm(currentLCM, tuple[1])
    }, lst[0][1]);
    
    return "(" + lst.map( tup => {
      return [tup[0] * lstLCM / tup[1], lstLCM].join(",")
    }).join(")(") + ")"
  
  }