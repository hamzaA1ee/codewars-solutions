// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil){
    good=good.split(' ').map(num=>Number(num))
    evil=evil.split(' ').map(num=>Number(num))
    const goodPower=[1,2,3,3,4,10]
    const badPower=[1,2,2,2,3,5,10]
    let goodSum=0;
    let badSum=0;
    
    for(let i=0;i<evil.length;i++){
        if(i<evil.length-1){
      //good
          goodSum+=goodPower[i]*good[i]
  }
      badSum+=badPower[i]*evil[i]
  }
    if(badSum===goodSum) return "Battle Result: No victor on this battle field"
    return badSum>goodSum ? "Battle Result: Evil eradicates all trace of Good":"Battle Result: Good triumphs over Evil"
  }
//   https://www.codewars.com/kata/52761ee4cffbc69732000738/train/javascript  