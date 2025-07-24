// Write a program that reverses a given Number.

// My method:
let x = 10;
let ref = x;
let revnum = 0;
while (ref != 0) {
  let digit = ref % 10;
  revnum = revnum * 10 + digit;
  ref = Math.trunc(ref / 10);
}

if (revnum < -(2 ** 31) || revnum > 2 ** 31 - 1) return 0; // this was due to the edge case as in leetcode problem, the constraint was mentioned for the return value, i.e for the signed int output. and if its exceeded, we're required to give 0, hence we kept that edge case in mind
console.log(revnum);
// return revnum;

// Optimized Method:
let refs = x;
let revnums = 0;
while (ref != 0) {
  let digit = ref % 10;
  revnums = revnums * 10 + digit;
  ref = Math.trunc(ref / 10);
}
return revnums;

// LEARNING:
// Didnt need the edgecase here as it was revnum() only, as input is in range. the reverse will obviously stay in the range only, so there was no need to use that edgecase.

// there was another test case of negative numbers that needed to be kept in mind, earlier i used Math.floor() to help reduce the given  no. but I didnt take it into account that for -ve no. Math.floor() will always take it away from 0. hence I needed to actually use Math.truncate().
