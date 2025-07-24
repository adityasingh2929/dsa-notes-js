// QUESTION: Write a program to check if a no. is a palindrome or not.

let ref = x;
let rev = 0;

while (ref > 0) {
  rev = rev * 10 + (ref % 10);
  ref = Math.trunc(ref / 10);
}

if (rev >= -(2 ** 31) && rev <= 2 ** 31 - 1) {
  if (x == rev) {
    return true;
  } else {
    return false;
  }
}
return 0;

// here's the final optimized code that handled all:

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let ref = x;
  let rev = 0;

  if (x < 0) return false;

  while (ref > 0) {
    rev = rev * 10 + (ref % 10);
    ref = Math.trunc(ref / 10);
  }

  return x == rev;
};

// LEARNING:
// Here, I only handled the obvious edge case, i.e the 2**31 one, WHICH ISNT EVEN NECESSARY, as you're inputting a number, which is already bound to be inside that range, & you're only reversing it, so there's no way that you'll go over the range now!

// Some imp test/edge cases that you missed were:
// x (i.e the input) <0 (-ve)
// if x==0
