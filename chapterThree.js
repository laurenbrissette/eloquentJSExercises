// define the function min that takes two arguments and returns their minimum
function min(first, second) {
  if (first <= second) {
    return first;
  } else {
    return second;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));

// define a recursive function isEven 
// where:
// zero is even
// one is odd
function isEven(item) {
  if(item === 0) {
    return true;
  }
  else if(item === 1) {
    return false;
  }
  else if(item < 0) {
    return isEven(item + 2);
  }
  else {
    return isEven(item - 2);
  }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false

// write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase B characters there are in the string 
function countBs(item) {
  let total = 0;
  for(let x = 0; x < item.length; x += 1) {
    if(item[x] === "B") {
      total += 1;
    }
  }
  return total;
}

function countChar(item, char) {
  let total = 0;
  for(let x = 0; x < item.length; x += 1) {
    if(item[x] === char) {
      total += 1;
    }
  }
  return total;
}

console.log(countBs("BOB"));
// -> 2
console.log(countChar("kakkerlak", "k"));
// -> 4