function solution(str){
    const strArr=str.split('')
    const newArr=[]
    for(let i=0;i<strArr.length-1;i+=2){
       newArr.push(strArr[i]+strArr[i+1])
 }

    newArr.push(strArr[strArr.length-1])
   
    if(newArr[newArr.length-1][0]==newArr[newArr.length-2][1]) return newArr.slice(0,-1)

    if(newArr[newArr.length-1].length!=1) return newArr
   newArr[newArr.length-1]+='_'
   return newArr
 }

 console.log(solution('abcded'))


 //Incomplete