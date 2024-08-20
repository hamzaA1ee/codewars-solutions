// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

function sequenceSum  (begin, end, step,sum=0){
  
    if(begin>end) return sum
    sum+=begin
   
    return sequenceSum(begin+step,end,step,sum)
  };


//   https://www.codewars.com/kata/586f6741c66d18c22800010a/train/javascript