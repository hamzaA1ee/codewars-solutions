// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 1

export function alphabetPosition(text:string):string {
  const arr:string[]=text.split(' ')
  const result:number[]=[]
  arr.map(item=>{
    for(let i:number=0;i<item.length;i++){
      const code=item.charCodeAt(i)
      if((code>=65 && code<=90) || (code>=97 && code<=122)){
        result.push(code>90 ? code-96: code-64)
}
}
})
  return result.join(' ')
}

// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/typescript