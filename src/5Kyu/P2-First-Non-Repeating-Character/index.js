// Write a function named first_non_repeating_letter† that takes a s input, and returns the first character that is not repeated anywhere in the s.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the s, and occurs first in the s.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a s contains all repeating characters, it should return an empty s ("");

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

function firstNonRepeatingLetter(s) {
  let assignObj = { count: 0, case: false, startIndex: 0 };
  const charObj = {};
  

  for (let i = 0; i < s.length; i++) {
    if (Object.keys(charObj).includes(s[i].toLowerCase())) {
      charObj[s[i].toLowerCase()].count++;
      continue;
    }
    assignObj.count=1;
    assignObj.startIndex = i;
    assignObj.case = s[i].toUpperCase() == s[i] ? true : false;
    charObj[s[i].toLowerCase()] = assignObj;
    assignObj = {};
  }
  
  for(let key in charObj){
      if(charObj[key].count>1) delete charObj[key]

  }
  
 //find min startIndex
 let start=0;let flag=true
 for(let key in charObj){
      if(flag) {flag=false;start=charObj[key].startIndex;continue;}
      if(charObj[key].startIndex<start) start=charObj[key].startIndex

 }

  for (let key in charObj) {
    
    
    if (charObj[key].startIndex == start )
      return charObj[key].case == true ? key.toUpperCase() : key.toLowerCase();

    
  }
  return "";
}

console.log(firstNonRepeatingLetter("sTreSS"));

//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
