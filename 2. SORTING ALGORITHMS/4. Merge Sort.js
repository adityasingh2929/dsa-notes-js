// Merge Sort Algorithms means -> Divide and Merge.

//  You can understand concepts with this: 1. Explaination  2. PseudoCode  3. Dry Run  4. Code  5. Time & Space Complexity.

function merge(arr, low, mid, high) {
  let temp = new Array();
  let left = low;
  let right = mid + 1;
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left += 1;
    } else {
      temp.push(arr[right]);
      right += 1;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left += 1;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right += 1;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mS(arr, low, high) {
  if (low == high) {
    return;
  }
  let mid = Math.trunc((low + high) / 2);
  mS(arr, low, mid);
  mS(arr, mid + 1, high);
  merge(arr, low, mid, high);
}

let arr = [3, 4, 1, 3, 5, 6, 8];
console.log(arr);
let n = arr.length;
mS(arr, 0, n - 1);

console.log(arr);

// T.C :
// its getting divided by 2 every iteration, i.e it'll be log base 2 n (as of now, now: )
// we're also merging the array, whose t.c is O(n) in the worst case.
// Hereby the T.C of merge sort will be: O(N * log2 N);   (N is multiplied but not added because its not a seperate thing, its happening with every log N iteration.)

// S.C : O(n)    // as the temp array can take upto *N* space in the worst case.
