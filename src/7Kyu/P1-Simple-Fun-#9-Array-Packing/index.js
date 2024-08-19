

function arrayPacking(a) {
    let result=[]
    a.forEach(element=>{
    result.push(dec(element))
    
    })
    const temp=a[a.length-1]
     result[result.length-1]=a[0]
     result[result.length-1]=temp
     console.log(result)
    const binary=result.join('')
    
    return parseInt(binary,2)
  }
  
  function dec(num){
  return ("00000000"+num.toString(2)).slice(-8)
  }

  console.log(arrayPacking([24,85,0]))