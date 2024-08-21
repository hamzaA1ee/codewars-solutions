// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  const obj = {};
    let assignObj={}
    
  let index = 0;
  for (let i of s) {
    if (Object.keys(obj).includes(i) || Object.keys(obj).includes(i.toLowerCase())) {
      obj[i.toLowerCase()].count += 1;
      index++;
      continue;
    }
    assignObj.count=1
    assignObj.startIndex=index
    if(i==i.toUpperCase()) {

        if(!(Object.keys(obj).includes(i.toLowerCase()))){
            obj[i.toLowerCase()]={...assignObj,caseCheck:true}
            continue
        }
    }
    i
    obj[i] = assignObj
    assignObj={}
    index++;
  }
  index = 0;
  console.log(obj)
  for (let key in obj) {
    if (obj[key].count == 1 && index <= obj[key].startIndex) {
        if(obj[key].caseCheck==true) return key.toUpperCase()
      return key;
    }
    index++;
  }
  
  return "";
}

console.log(firstNonRepeatingLetter('stress'));

//Incomplete
//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
