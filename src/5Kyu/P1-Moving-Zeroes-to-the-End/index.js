// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
function moveZeros(arr) {
    console.log(arr)
      let count=0
      const result=[]
      for(let i of arr){
          if(i===0 && !isNaN(i)  ) {count++;continue}
        result.push(i)
      }
      
      
      for(let i=0;i<count;i++){
        result.push(0)
    }
      
      return result
    }


//   https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
