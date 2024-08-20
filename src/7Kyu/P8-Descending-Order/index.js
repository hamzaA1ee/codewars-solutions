// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let input=n
    const arr=[]
    while(input>0){
      const item=input%10
        input=Math.floor(input/10)
        arr.push(item)
    }
    arr.sort((a,b)=>{
    return b-a
    })
    return Number(arr.join(''))
  }


//   https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript