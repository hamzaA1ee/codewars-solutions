// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:
// a = "I like turtles"
// b = "I like turkeys"
// Result: 3

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2

function hamming(a, b) {
    let count=0
      for(let i=0;i<a.length;i++){
          if(a[i]==b[i]) continue
      count++
  }
    
    return count
  
  }

//   https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69/train/javascript