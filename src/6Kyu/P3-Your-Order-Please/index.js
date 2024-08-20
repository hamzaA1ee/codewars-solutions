// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.


function order(words){
  
    const wordArr=words.split(' ')
    const indexObj={}
    const resultArr=[]
    
    wordArr.map((curr,index)=>{
        for(let i of curr){
            if(isNumber(i)){
                indexObj[i]=index
                break;
            }
        }
    })

    for(let key in indexObj){
        
        resultArr.push(wordArr[indexObj[key]])
    }
    
    return resultArr.join(' ')
}


function isNumber(num){
    return Number(num) ? true:false
}



// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript