// Write a program that reverses a given Number.

// My method:
// let x = -1;
// let ref = x;
// let revnum = 0;
// while (ref != 0) {
//   let digit = ref % 10;
//   revnum = revnum * 10 + digit;
//   ref = Math.trunc(ref / 10);
// }
// console.log(revnum);

// Optimized Method:

let x = 1534236469; // Example number that causes overflow
let ref = x;
let revnum = 0;

const MAX = 2 ** 31 - 1; // 2147483647
const MIN = -(2 ** 31); // -2147483648

while (ref != 0) {
  let digit = ref % 10;

  // Check for overflow before the next multiplication
  // This is the key change!
  if (
    revnum > Math.floor(MAX / 10) ||
    (revnum === Math.floor(MAX / 10) && digit > 7)
  ) {
    revnum = 0;
    break;
  }
  if (
    revnum < Math.ceil(MIN / 10) ||
    (revnum === Math.ceil(MIN / 10) && digit < -8)
  ) {
    revnum = 0;
    break;
  }

  revnum = revnum * 10 + digit;
  ref = Math.trunc(ref / 10);
}

console.log(revnum);

// LEARNING:

// there was another test case of negative numbers that needed to be kept in mind, earlier i used Math.floor() to help reduce the given  no. but I didnt take it into account that for -ve no. Math.floor() will always take it away from 0. hence I needed to actually use Math.truncate().
