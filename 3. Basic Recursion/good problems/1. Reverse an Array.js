// Write a Program to reverse an array using Recursion.

// Method-1: using 2 arrays.
function rev_element(arr, i, rev_arr) {
  if (i < 0) {
    console.log(rev_arr);
    return;
  }
  rev_arr.push(arr[i]);
  rev_element(arr, --i, rev_arr);
}
let arr = [11, 22, 33, 44, 55];
let rev_arr = [];
rev_element(arr, arr.length - 1, rev_arr);

// Method 2: using the given array only. [Swapping].  [By using two pointers approach]

function reversing(l, r, arr) {
  if (l >= r) {
    console.log(arr);
    return;
  }
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
  reversing(++l, --r, arr);
}

let array = [11, 22, 33, 44, 55];
reversing(0, array.length - 1, array);

// Method 3:  -> [one pointer approach]

function reversal(i, arr) {
  let n = arr.length;
  if ((n % 2 != 0 && i > Math.trunc(n / 2)) || (n % 2 == 0 && i == n / 2)) {
    console.log(arr);
    return;
  }
  let temp = arr[i];
  arr[i] = arr[n - i - 1];
  arr[n - i - 1] = temp;
  reversal(++i, arr);
}

let n_arr = [11, 22, 33, 44, 55];
reversal(0, n_arr);
