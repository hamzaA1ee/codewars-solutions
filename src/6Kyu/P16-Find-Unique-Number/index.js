// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

function findUniq(arr) {
    let map={}
    arr.forEach((item)=>{
         if(map[item]) {
           map[item]++
   }
      else{
         map[item]=1
   }
      
      
   })
     for(let i in map){
       if(map[i]==1){
         return Number(i)
   }
   }
   }

//    https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
   