
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers){
    let string=''
    const numArr=numbers.sort()
    for(let i of numArr){
      if(i==0) continue;
      if(i==1){
        string+=`(${i}`
        continue;
  }   
      if(i==3){
        string+=`${i}) `
        continue;
      }
      if(i==6){
          string+=`${i}-`
        continue;
  }
      
      string+=`${i}`
      
    }
    string+=`0`
    return string
  }

//Incomplete
//   https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript