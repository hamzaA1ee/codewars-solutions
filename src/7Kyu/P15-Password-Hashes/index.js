// Create the function that converts a given string into an md5 hash. The return value should be encoded in hexadecimal.

// Remember that you can include the builtin require() function to include external modules (you're not expected to implement MD5 hash algorithm yourself, there are many modules that can do that for you).

// If you're not familiar with modules, see this kata.

// NodeJS documentation here.

// Code Examples
// passHash("password") // --> "5f4dcc3b5aa765d61d8327deb882cf99"
// passHash("abc123") // --> "e99a18c428cb38d5f260853678922e03"

const {createHash}=require('node:crypto')
function passHash(str) {
  const hash=createHash('md5')
 return hash.update(str).digest('hex')
}

// https://www.codewars.com/kata/54207f9677730acd490000d1/train/javascript