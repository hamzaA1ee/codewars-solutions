// You have been hired by a major MP3 player manufacturer to implement a new music compression standard. In this kata you will implement the ENCODER, and its companion kata deals with the DECODER. It can be considered a harder version of Range Extraction.

// Specification
// The input signal is represented as an array of integers. Several cases of regularities can be shortened.

// A sequence of 2 or more identical numbers is shortened as number*count
// A sequence of 3 or more consecutive numbers is shortened as first-last. This is true for both ascending and descending order
// A sequence of 3 or more numbers with the same interval is shortened as first-last/interval. Note that the interval does NOT need a sign
// Compression happens left to right
// Examples
// [1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] is compressed to "1,3-5,7-11,14,15,17-20"
// [0, 2, 4, 5, 7, 8, 9] is compressed to "0-4/2,5,7-9"
// [0, 2, 4, 5, 7, 6, 5] is compressed to "0-4/2,5,7-5"
// [0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5] is compressed to "0-4/2,5,7-5,5*4"

function compress(music) {
  console.log(music);
  let count = 0;
  let string = "";
  for (let i = 0; i < music.length; i++) {
    if (music[i] == music[i + 1]) {
      count = 2;
      const result = checkForSame(music, i, count);
      count = result.count;
      i = result.index;
      if (count < 2) {
        count = 0;
        continue;
      }
      string += `${music[i]}*${count},`;

      continue;
    }
    if (music[i] - music[i + 1] === -1) {
      const lastIndex = checkForConsecutive(music, i + 1);
      if (lastIndex == i + 1) {
        string += `${music[i]},`;

        continue;
      }
      string += `${music[i]}-${music[lastIndex]},`;
      i = lastIndex;
      continue;
    }

    //check for ascending first-last/interval
    let result = {};
    if (i < music.length - 1) {
      result = ascendingInterval(music, i);
      string+=`${music[i]}-${music[result.index]}/${result.interval}`
      i=result.index
      
    }

    //check for descending first-last/interval

    string += `${music[i]},`;
  }
  return string.slice(0, -1);
}

function ascendingInterval(music, i) {
  const firstInterval = music[i] - music[i + 1];
  let index = i,
    interval = 0;
  for (let j = i + 2; j < music.length; j++) {
    //possible ha

    if (firstInterval === music[j] - music[j + 1]) {
      index = j;
      interval = firstInterval;
      continue;
    }
    break;
  }

  return { index, interval };
}

function checkForConsecutive(music, i) {
  let index = i;
  for (let j = i; j < music.length; j++) {
    if (music[j] - music[j + 1] === -1) {
      index = j + 1;
      continue;
    }
    break;
  }
  return index;
}

function checkForSame(music, i, count) {
  let index = i;
  for (let j = i + 1; j < music.length; j++) {
    index = j;
    if (music[j] == music[j + 1]) {
      count += 1;
    }
    break;
  }

  return { count, index };
}

console.log(compress([1, 1, 2, 3, 4, 5, 7, 9, 11]));

//Incomplete

///descending ma consecutive and (ascending and desc) ma interval wala kaam nhi hua

// https://www.codewars.com/kata/58db9545facc51e3db00000a/train/javascript
