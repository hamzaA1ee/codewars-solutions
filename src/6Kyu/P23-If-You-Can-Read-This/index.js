// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

// Note:

// There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
// The set of used punctuation is ,.!?.
// Punctuation should be kept in your return string, but spaces should not.
// Xray should not have a dash within.
// Every word and punctuation mark should be seperated by a space ' '.
// There should be no trailing whitespace
function toNato(words) {
    let string=''
      for(let i of words){
        if(i==' ') continue;
        const asc=i.toLowerCase().charCodeAt()
        if(asc>=97 && asc<=122){
        string+=NATO[i.toUpperCase()]+' '
          
          continue
  }
        
        string+=i+' '
        
  } 
    if(string[string.length-1]==' ') return string.substring(0,string.length-1)
      return string || "";
  }


//   https://www.codewars.com/kata/586538146b56991861000293/train/javascript