
// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// N	Product	N factorial	Trailing zeros
// 6	1*2*3*4*5*6	720	1
// 12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2
// Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.


function zeros (n) {
    if (n < 0) 
           return -1;
   
       
       let count = 0;
   
      
       for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
           count += Math.floor(n / i);
   
       return count;
   }
// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript

