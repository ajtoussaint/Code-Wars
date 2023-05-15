// Format any integer provided into a string with "," (commas) in the correct places.

// Example:

// For n = 100000 the function should return '100,000';
// For n = 5678545 the function should return '5,678,545';
// for n = -420902 the function should return '-420,902'.


var numberFormat = function (number) {
    function csn(n){
      return n.toString().split("").reverse().reduce( (acc, num, i) => {
      let res = acc;
      res.push(num)
      if((i+1)%3 === 0 && (i+1) < n.toString().length){
        res.push(',');
      }
      return res;
     }, []).reverse().join("");
    }
    
    return number < 0 ? 
      "-" + csn(number*-1) :
      csn(number);
    
  };