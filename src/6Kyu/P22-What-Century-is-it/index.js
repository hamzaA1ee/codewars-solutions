// Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

// Examples
// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

function whatCentury(year) {
  const num = Math.ceil(Number(year) / 100);

  if (num > 3 && num < 21) {
    return num + "th";
  }
  return num + concatenate(Number(num) % 10);
}

function concatenate(last) {
  switch (last) {
    case 1:
      return "st";
      break;
    case 2:
      return "nd";
      break;
    case 3:
      return "rd";
      break;
    default:
      return "th";
      break;
  }
}
// https://www.codewars.com/kata/52fb87703c1351ebd200081f/train/javascript