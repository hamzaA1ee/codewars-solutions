// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.

// Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
    const arr=[]
    for(let key in results){
      if(results[key]>=60){
      arr.push([key,results[key]])}
    }
    
    arr.sort((a,b)=>{
        return b[1]-a[1]
    })
    console.log(arr)
    return  arr.map(item=>item[0])
  }

  // https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript