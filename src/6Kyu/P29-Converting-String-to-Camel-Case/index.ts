// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



export function toCamelCase(str:string):string{
    if(str.length==0) return ''
      const arr:string[]=str.split(/[\s-_]+/);
    console.log(arr)
      return arr.map(item=>item[0].toUpperCase()+item.substring(1,item.length)).join('')
    }
    // https://www.codewars.com/kata/517abf86da9663f1d2000003/train/typescript