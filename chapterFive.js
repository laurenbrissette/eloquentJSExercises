// flattening
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

function flatten(arr) {
  return arr.reduce((item1, item2) => {
    return item1.concat(item2);
  });
}

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));

// Your own loop
// Write a higher-order function loop that provides something like a for loop statement. It should take a value, a test function, an update function, and a body function. Each iteration, it should first run the test function on the current loop value and stop if that returns false. It should then call the body function, giving it the current value, and finally call the update function to create a new value and start over from the beginning.

function loop(value, test, update, body) {
  if (test(value)) {
    // test value
    body(value); // execute
    value = update(value); // update value
    loop(value, test, update, body); // run again
  }
}
loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log,
);
// → 3
// → 2
// → 1

// everything
// Arrays also have an every method analogous to the some method. This method returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

function every(array, test) {
  for (let x of array) {
    if (!test(x)) return false;
  }
  return true;
}

// use some method
// no item doesn't pass
function everyTwo(array, test) {
  return !array.some(x => !test(x));
}
console.log(everyTwo([1, 3, 5], (n) => n < 10));
// → true
console.log(everyTwo([2, 4, 16], (n) => n < 10));
// → false
console.log(everyTwo([], (n) => n < 10));
// → true

// dominant writing direction 
// Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
