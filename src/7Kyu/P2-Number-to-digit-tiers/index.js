
// Create a function that takes a number and returns an array of strings containing the number cut off at each digit.

// Examples
// 420 should return ["4", "42", "420"]
// 2017 should return ["2", "20", "201", "2017"]
// 2010 should return ["2", "20", "201", "2010"]
// 4020 should return ["4", "40", "402", "4020"]
// 80200 should return ["8", "80", "802", "8020", "80200"]
// PS: The input is guaranteed to be an integer in the range [0, 1000000]


function createArrayOfTiers(num) {
    const string=String(num)
    const arr=[]
    for(let i=0;i<string.length;i++){
       arr.push(string.substring(0,i+1))
    }
    
     return arr
 
 }

 console.log(createArrayOfTiers(1011))
 

 // https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript