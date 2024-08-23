// Digitwise addition is a special kind of addition where instead of adding 1 normally to the number, it adds 1 to every digit of that number. If the digit is a 9, we replace it with a 10 without carrying over to the next digit.

// Examples
// 123 -> 234
// 910 -> 1021
// 789 -> 8910

function digitwiseAddition(N, K) {
    console.log(N,K)
     
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
      
    console.log(nums.join(''),nums.join('').length)
      return nums.join('').length
    }

    digitwiseAddition(817121709,12)


// taking too long -> timeout exceeds

// https://www.codewars.com/kata/663e0eccecb2d0a12da51f84/train/javascript