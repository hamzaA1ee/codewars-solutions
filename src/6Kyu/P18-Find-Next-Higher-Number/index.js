// Your task is to find the next higher number (int) with the same number of '1'- Bits.

// I.e. as many 1 bits as before and output next higher than input. Input is always an int between 1 and 1<<30 (possibly inclusive). No bad cases or special tricks...

// Some easy examples:
// Input: 129  => Output: 130 (10000001 => 10000010)
// Input: 127 => Output: 191 (01111111 => 10111111)
// Input: 1 => Output: 2 (01 => 10)
// Input: 323423 => Output: 323439 (1001110111101011111 => 1001110111101101111

function nextHigher(n) {
    const inputBinary=decimal(n)
    const inputSum=inputBinary.split('').reduce((curr,next)=>Number(curr)+Number(next),0)
    let input=n+1
    let flag=false;
    let computed=0
    while(!flag){
          computed=decimal(input).split('').reduce((curr,next)=>Number(curr)+Number(next),0)
          if(computed===inputSum) return input
      input++
  }
  return input
      
  }
  
  
  function decimal(n){
    return (n >>> 0).toString(2);
  }

  //timeout exceed but passes the rest cases
//   https://www.codewars.com/kata/56bdd0aec5dc03d7780010a5/train/javascript