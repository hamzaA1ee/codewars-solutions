// Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.

// "Interesting" Numbers
// Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

// Any digit followed by all zeros: 100, 90000
// Every digit is the same number: 1111
// The digits are sequential, incementing†: 1234
// The digits are sequential, decrementing‡: 4321
// The digits are a palindrome: 1221 or 73837
// The digits match one of the values in the awesomePhrases array
// † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
// ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

// So, you should expect these inputs and outputs:

// // "boring" numbers
// isInteresting(3, [1337, 256]);    // 0
// isInteresting(3236, [1337, 256]); // 0

// // progress as we near an "interesting" number
// isInteresting(11207, []); // 0
// isInteresting(11208, []); // 0
// isInteresting(11209, []); // 1
// isInteresting(11210, []); // 1
// isInteresting(11211, []); // 2

// // nearing a provided "awesome phrase"
// isInteresting(1335, [1337, 256]); // 1
// isInteresting(1336, [1337, 256]); // 1
// isInteresting(1337, [1337, 256]); // 2
// Error Checking
// A number is only interesting if it is greater than 99!
// Input will always be an integer greater than 0, and less than 1,000,000,000.
// The awesomePhrases array will always be provided, and will always be an array, but may be empty. (Not everyone thinks numbers spell 

function isInteresting(number, awesomePhrases) {
    let string = String(number);
    let stringArr = string.split("");
    if (
      number > 99 &&
      (checkZeroes(stringArr) ||
        sameNumber(stringArr) ||
        ascendingIncrement(string) ||
        descendingIncrement(string) ||
        isPalindrome(string)) || awesomePhrases.includes(number)
    )
      return 2;
    string = String(number + 1);
    stringArr = string.split("");
    if (
      number > 99 &&
      (checkZeroes(stringArr) ||
        sameNumber(stringArr) ||
        ascendingIncrement(string) ||
        descendingIncrement(string) ||
        isPalindrome(string)) || awesomePhrases.includes(number+1)
    )
      return 1;
    string = String(number + 2);
    stringArr = string.split("");
    if (
      number > 99 &&
      (checkZeroes(stringArr) ||
        sameNumber(stringArr) ||
        ascendingIncrement(string) ||
        descendingIncrement(string) ||
        isPalindrome(string))|| awesomePhrases.includes(number+2)
    )
      return 1;
    if (number == 99 || number == 98) return 1;
    return 0;
  }
  
  function checkZeroes(arr) {
    const number = arr
      .slice(1, arr.length )
      .reduce((curr, max) => Number(curr) + Number(max), 0);
    return number >= 1 ? false : true;
  }
  
  function sameNumber(arr) {
      for(let i=0;i<arr.length;i++){
          if(arr[i]==arr[i+1]) continue
          return false
      }
    return true
  }
  
  function ascendingIncrement(string) {
    const start = string[0];
    let count = 0;
    let end = string[string.length - 1];
    if(end==0) {end=string[string.length-2]; count=1}
    for (let i = start; i < end; i++) {
      if (i == string[count]) {
        count++;
        continue;
      }
      else if(string[string.length-1]=='0' && string[string.length-2]=='9'){
          count++
          continue
      }
      
      return false;
    }
    return count == string.length - 1 ? true : false;
  }
  
  function descendingIncrement(string) {
    const start = Number(string[0]);
    const end = Number(string[string.length - 1]);
    let count = 0;
    for (let i = start; i > end; i--) {
      if (i == string[count]) {
        count++;
        continue;
      }
      return false;
    }
    return count == string.length - 1 ? true : false;
  }
  
  function isPalindrome(string) {
    let len = 0;
    let count = 0;
    if (string.length % 2 == 0) {
      len = string.length;
      while (len > 0 && string[count] === string[len - 1 - count]) {
        count += 1;
        if (count == len - 1) return true;
      }
  
      return false;
    } else {
      count = 0;
      for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] == string[string.length - 1 - count]) {
          count++;
          continue;
        }
        return false;
      }
      return count == Math.floor(string.length / 2) ? true : false;
    }
  }

//   https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript