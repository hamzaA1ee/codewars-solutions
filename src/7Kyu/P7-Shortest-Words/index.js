
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    const words=s.split(' ')
    let min=words[0].length
    for(const item of words){
      if(item==words[0]) continue
      if(item.length<min){
          min=item.length
      }
    }
    return min
  }

//   https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript