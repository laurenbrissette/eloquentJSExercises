// The Sum of A Range
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

function range(start, end) {
  let items = [];
  let counter = start;
  while (counter <= end) {
    items.push(counter);
    counter += 1;
  }
  return items;
}
console.log("range 1 to 3 inclusive");
console.log(range(1, 3));
// -> [1, 2, 3]

//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

function sum(arr) {
  let total = 0;
  for (let x = 0; x < arr.length; x += 1) {
    total = total + arr[x];
  }
  return total;
}

console.log("sum");
console.log(sum([1, 3, 1, 12]));
// -> 17

//modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements should go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

function rangeTwo(start, end, step = 1) {
  let items = [];
  let counter = start;
  while (counter <= end) {
    items.push(counter);
    counter += step;
  }
  return items;
}

console.log("range two");
console.log(rangeTwo(2, 10, 2));
// -> [2, 4, 6, 8, 10]
console.log(rangeTwo(2, 10));
// -> [2, 3, 4, 5, 6, 7, 8, 9, 10]

// reversing an array
// reverseArray, should take an array as argument and produce a new array that has the same elements in the inverse order.

function reverseArray(arr) {
  let result = [];
  for (let x = 0; x < arr.length; x += 1) {
    result.unshift(arr[x]);
  }
  return result;
}

console.log("reverse 1 2 3");
console.log(reverseArray([1, 2, 3]));
// -> [3, 2, 1]

//  reverseArrayInPlace, should do what the reverse method does: modify the array given as argument by reversing its elements.

function reverseArrayInPlace(arr) {
  let midpoint = Math.floor(arr.length / 2);
  let left = 0;
  let right = arr.length - 1;
  while (left < midpoint) {
    let leftVal = arr[left];
    let rightVal = arr[right];
    arr[left] = rightVal;
    arr[right] = leftVal;
    left = left + 1;
    right = right - 1;
  }
  return arr;
}

console.log("reverse 1 2 3");
console.log(reverseArrayInPlace([1, 2, 3]));
// -> [1, 2, 3]
console.log("reverse 1 through 10");
console.log(reverseArrayInPlace(range(1, 10)));
// -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// A List
// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.

function arrayToList(arr) {
  let result = null;
  for (let x = arr.length - 1; x >= 0; x -= 1) {
    if (result === undefined) {
      result = { value: arr[x], rest: null };
    } else {
      result = { value: arr[x], rest: result };
    }
  }
  return result;
}

console.log("array to list");
console.log(arrayToList(range(1, 5)));

//Also write a listToArray function that produces an array from a list.
function listToArray(list) {
  let result = [];
  while (list !== null) {
    result.push(list.value);
    list = list.rest;
  }
  return result;
}

console.log("list to array");
console.log(listToArray(arrayToList(range(1, 5))));

// prepend takes an element and a list and creates a new list that adds the element to the front of the input list
function prepend(val, list) {
  let listResult = { value: val, rest: list };
  return listResult;
}
console.log("prepend");
console.log(prepend(2m arrayToList([1, 1, 1])));
// nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

function nth(list, index) {
  if (list === null) {
    return undefined;
  }
  if (index == 0) {
    return list;
  } else {
    return nth(list.rest, index - 1);
  }
}

console.log("nth");
console.log(nth(arrayToList([1, 2, 3, 4]), 2));
// -> list {3, 4}

// sometimes you don't want to use == 
// write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

function deepEqual(itemOne, itemTwo) {
  if(a === b) {return true;}

  if(a == null || typeof a == "object" 
     || b == null || typeof b != "object") {
    return false;
     }
  for(let key of Object.keys(A)) {
    if(!keysB.includes(key) || !deepEqual(a[key], b[key]))
      return false;
    return true;
  }
}