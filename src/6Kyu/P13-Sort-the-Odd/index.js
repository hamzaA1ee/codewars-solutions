// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    const indexes=[]
    const arr=[]
    for(let i=0;i<array.length;i++){
      if(array[i]%2==0) continue
      indexes.push(i)
  }
    
  for(let i of indexes){
      arr.push(array[i])
  }
    
    arr.sort((a,b)=>{
    return a-b
  })
    
     for(let i=0;i<indexes.length;i++){
        array[indexes[i]]=arr[i]
  }
    
    return array
  }

//   https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript