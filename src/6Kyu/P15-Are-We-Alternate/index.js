// Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

// isAlt("amazon")
// // true
// isAlt("apple")
// // false
// isAlt("banana")
function isAlt(word) {
    const vowels = ["a", "e", "i", "o", "u"];
  
   for(let i=0;i<word.length-1;i++){
      if(vowels.includes(word[i]) === vowels.includes(word[i+1])) return false
      
   }
   return true
  }

//   https://www.codewars.com/kata/59325dc15dbb44b2440000af/train/javascript