// Write a loop that makes seven calls to console.log to output a triangle
let item = "#";
while (item.length <= 7) {
  console.log(item);
  item = item + "#";
}

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

for (let x = 1; x <= 100; x += 1) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log("FizzBuzz");
  } else if (x % 3 == 0) {
    console.log("Fizz");
  } else if (x % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(x.toString());
  }
}
