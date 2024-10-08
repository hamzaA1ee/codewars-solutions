// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

function findMissingLetter(array)
{
  let asc=array[0].charCodeAt()

  for(let i of array){
    const val=i.charCodeAt()
    if(val==asc){
        asc+=1
      continue;
    }
    
    return String.fromCharCode(asc)
    
  }
  
}

// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript