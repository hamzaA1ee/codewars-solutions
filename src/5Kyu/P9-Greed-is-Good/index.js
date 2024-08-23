// Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

//  Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point


function score(dice) {
  const copy = [...dice];
  let sum = 0;
  const sortDice = copy.sort((a, b) => {
    return a - b;
  });
  console.log(dice);

  for (let i = 1; i <= 6; i++) {
    const count = frequency(sortDice, i);

    if (i == 1 && count > 0) {
      sum = forOneAndFive(i, sum, count);
      continue;
    }
    if (i == 5 && count > 0) {
      sum = forOneAndFive(i, sum, count);
      continue;
    } else {
      let val = Math.floor(count / 3);
      if (val >= 1) {
        sum += i * 100;
      }
    }
  }
  return sum;
}
function frequency(arr, req) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == req) {
      count += 1;
    }
  }

  return count;
}

function forOneAndFive(i, sum, count) {
  if (count <= 0) return sum;
  let values = i == 1 ? [1000, 100] : [100, 50];
  let val = Math.floor(count / 3);

  if (val >= 1) {
    sum += i * values[0];
    count = count - val * 3;
  }
  if (val == 0) {
    if (count < 1) {
      return sum;
    }
    val = count;
  }

  if (val != 0 && count != 0) sum += count * values[1];
  return sum;
}


// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript