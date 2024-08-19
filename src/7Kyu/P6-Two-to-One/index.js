// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
    const string1=s1.split('')
    const string2=s2.split('')
    let result=[]
    for(let i=0;i<string1.length;i++){
      if(result.includes(string1[i])) continue
      result.push(string1[i])
  }
    
    for(let i=0;i<string2.length;i++){
       if(result.includes(string2[i])) continue
      result.push(string2[i])
  }
     
    result.sort()
    
    return result.join('')
  }
                    


//   https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript