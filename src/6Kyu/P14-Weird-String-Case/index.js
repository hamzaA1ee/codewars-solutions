// Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

// Examples:
// "String" => "StRiNg"
// "Weird string case" => "WeIrD StRiNg CaSe"
function toWeirdCase(string) {
    console.log(string)
      const arr=string.split(' ')
      for(let j=0;j<arr.length; j++){
          let word=''
          for(let i=0;i<arr[j].length;i++){
                  if(i%2==0){
                      word+=arr[j][i].toUpperCase()
                      continue
                  }
                  word+=arr[j][i].toLowerCase()
          }
          arr[j]=word
          word=''
  
      }
    
  
      return arr.join(' ')
  }


//   https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript