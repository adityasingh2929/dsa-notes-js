// left Rotate an array by 1 position.
let ans = [1, 2, 3, 4, 5];
let first = ans[0];
for (let i = 1; i < ans.length; i++) {
  ans[i - 1] = ans[i]; // my mistake was that I was iterating from 0 to n-1 and then i was putting arr[i] = arr[i-1] values. That just meant that I was just taking i-1 index's value untill the last by swapping.
}
ans[ans.length - 1] = first;
console.log(ans);

console.log();

// Right Rotate an array by 1 position.
let ansTwo = [1, 2, 3, 4, 5];
let last = ansTwo[ansTwo.length - 1];
for (let i = ansTwo.length - 2; i >= 0; i--) {
  ansTwo[i + 1] = ansTwo[i];
}
ansTwo[0] = last;
console.log(ansTwo);

console.log();

// Right Rotate an array by k positions.

// Brute-Forced approach:
let arr = [1, 2, 3, 4, 5];
const n = arr.length;
let temp = 0;
let k = 1;
let prev = 0;
for (let c = 0; c < k; c++) {
  for (let i = 0; i < n; i++) {
    let prevIndex = (i + n - 1) % n;
    if (i == 0) prev = arr[prevIndex];
    temp = arr[i];
    arr[i] = prev;
    prev = temp;
  }
}

console.log(arr);
