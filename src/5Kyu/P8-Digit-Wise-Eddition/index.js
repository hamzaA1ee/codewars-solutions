function digitwiseAddition(N, K) {
    console.log(N,K)
      // Test Constraints:
      // 1 <= n <= 10 ** 9
      // 1 <= k <= 10 ** 5
      // if(1 <= N <= 10 ** 9 && 1 <= K <= 10 ** 5) return 
      const number=String(N)
      const nums=number.split('')
      for(let i=0;i<K;i++){
          for(let j=0;j<nums.length;j++){
            if(nums[j].length>1){
                
                let temp=''
                for(let k=0;k<nums[j].length;k++){
                        let digit=Number(nums[j][k])
                        digit+=1
                        temp+=String(digit)
                }
                nums[j]=temp
                continue;
            }
            let n=Number(nums[j])
            n+=1
            nums[j]=String(n)
            
    }
    }
      
    console.log(nums.join(''))
      return nums.join('').length
    }

//Incomplete
// taking too long

// https://www.codewars.com/kata/663e0eccecb2d0a12da51f84/train/javascript