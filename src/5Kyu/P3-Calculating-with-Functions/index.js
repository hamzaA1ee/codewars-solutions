// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
function zero(op) {
  return op ? op(0) : 0;
}
function one(op) {
  return op ? op(1) : 1;
}
function two(op) {
  return op ? op(2) : 2;
}
function three(op) {
  return op ? op(3) : 3;
}
function four(op) {
  return op ? op(4) : 4;
}
function five(op) {
  return op ? op(5) : 5;
}
function six(op) {
  return op ? op(6) : 6;
}
function seven(op) {
  return op ? op(7) : 7;
}
function eight(op) {
  return op ? op(8) : 8;
}
function nine(op) {
  return op ? op(9) : 9;
}

function plus(n) {
  return function (x) {
    return x + n;
  };
}
function minus(n) {
  return function (x) {
    return x - n;
  };
}
function times(n) {
  return function (x) {
    return x * n;
  };
}
function dividedBy(n) {
  return function (x) {
    return Math.floor(x / n);
  };
}

// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
