// Your task is to write a function that takes two integers n and m, and returns a sorted array of all integers from n to m inclusive, which have exactly 3 divisors (excluding 1 and the number itself).

// Example:
// solution(2, 20) -> [16]
// 16 has 3 divisors: 2, 4, 8 (1 and 16 aren't included)

function solution(n, m) {
    const arr=[]
    let count=0
    for(let i=n;i<=m;i++){
      for(let j=2;j<i;j++){
          if(i%j==0){
              count+=1
  }
   
  }
  if(count==3){
    arr.push(BigInt(i))
    
}
count=0
  }
 
    return arr || [];
  }

  console.log(solution(n = 2, m = 100))


  //Incomplete
//   https://www.codewars.com/kata/65eb2c4c274bd91c27b38d32/train/javascript