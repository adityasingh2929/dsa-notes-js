// Write a Program to count the digits of the given number:

// let n = 12345;
// let ref = n;
// let c = 0;

// while (ref != 0) {
//   c += 1;
//   ref = Math.floor(ref / 10);
// }

// console.log(`${n} has ${c} digits.`);

// // A better alternative:
// // as we know, the no. of digits = no. of divisions with 10.
// // And that's what (no. of divisions with 10) we call the answer of log10 (approximately).

// console.log();

// let cnt = Math.floor(Math.log10(n) + 1);
// console.log(`${n} has ${cnt} digits.`);

// Therefore the timeComplexity of both of the methods is:  O(log10(n))  OR ~ O(log(n))

// Learning:
// 'Time-Complexity will always be logarithmic when no. of iterations is based on no. of divisions.'
