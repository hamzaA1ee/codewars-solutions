// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const numArr = numbers.split(" ").map((element) => {
    return parseInt(element, 10);
  });
  console.log(numArr);
  numArr.sort((a, b) => {
    return b - a;
  });
  return `${numArr[0]} ${numArr[numArr.length - 1]}`;
}

//   https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
