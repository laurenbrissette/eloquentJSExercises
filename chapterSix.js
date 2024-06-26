// a vector type
//Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers), that it saves to properties of the same name.

//Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

//Add a getter property length to the prototype that computes the length of the vector—that is, the distance of the point (x, y) from the origin (0, 0).

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x - 0, 2) + Math.pow(this.y - 0, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// groups
// Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its argument is a member of the group.

////Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

class Group {
  constructor() {
    this.values = [];
  }

  add(item) {
    if (!this.values.includes(item)) {
      this.values.push(item);
    }
  }

  has(item) {
    return this.values.includes(item);
  }

  delete(item) {
    const idx = this.values.indexOf(item);
    if (idx != -1) {
      this.values.splice(idx, 1);
    }
  }

  static from(items) {
    let result = new this();
    for (let item of items) {
      result.add(item);
    }
    return result;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this.values);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// iterable groups
// make the Group class iterable

class GroupIterator {
  constructor(group) {
    this.group = group;
  }

  next() {
    if (this.group.length == 0) {
      return { done: true };
    } else {
      let value = this.group.shift();
      return { value: value, done: false };
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
