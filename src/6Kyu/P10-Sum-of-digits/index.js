// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digitalRoot(n) {
    if(n==0) return 0
      let num=n
    let result=0
      while(num>0){
        result+=num%10
        num=Math.floor(num/10)
        
    }
      const count=numCount(result)
      if(count>1) return digitalRoot(result)
      
      return result || -1
    }
    
    function numCount(n){
        let num=n
        let count=0
        while(num>0){
          num=Math.floor(num/10)
          count++
    }
      return count
      }
  
    //   https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript