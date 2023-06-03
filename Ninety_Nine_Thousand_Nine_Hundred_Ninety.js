// Write a method that takes a number and returns a string of that number in English.

// Your method should be able to handle any number between 0 and 99999. If the given number is outside of that range or not an integer, the method should return an empty string.

// Examples
// 0      -->  "zero"
// 27     -->  "twenty seven"
// 100    -->  "one hundred"
// 7012   -->  "seven thousand twelve"
// 99205  -->  "ninety nine thousand two hundred five"

const numberToEnglish = n => {
    if( n%1 !== 0 || n<0 || n>99999){
      return '';
    }
    //your code here
    let digit = {
      0:'zero',
      1:'one',
      2:'two',
      3:'three',
      4:'four',
      5:'five',
      6:'six',
      7:'seven',
      8:'eight',
      9:'nine',
      10:'ten',
      11:'eleven',
      12:'twelve',
      13:'thirteen',
      14:'fourteen',
      15:'fifteen',
      16:'sixteen',
      17:'seventeen',
      18:'eighteen',
      19:'nineteen'
    }
    let tens = {
      2:'twenty',
      3:'thirty',
      4:'forty',
      5:'fifty',
      6:'sixty',
      7:'seventy',
      8:'eighty',
      9:'ninety',
    }
  
    
    if(n<20){
      return digit[n];
    }else if (n<100){
      let ones = numberToEnglish(n%10)
      return tens[(n-n%10)/10] + (ones === 'zero' ? "" : " " + ones);
    }else if (n<1000){
      let tens = numberToEnglish(n%100)
      return digit[(n-n%100)/100] + " hundred" + (tens === 'zero' ? "" : " " + tens);
    }else{
      let hundreds = numberToEnglish(n%1000)
      return numberToEnglish((n-n%1000)/1000) + " thousand" + (hundreds === 'zero' ? "" : " " + hundreds);
    }
  }