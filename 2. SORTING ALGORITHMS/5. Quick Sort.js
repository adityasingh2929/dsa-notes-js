// Quick Sort Algorithms -> Sorts in asceinding order, after tweaking it a bit, it can also sort it in desceinding order.

// Why Quick sort? -> Its T.C = O(N log N)  but its S.C = O(1)   // hence more efficient than Merge Sort.

// 1. Pick a PIVOT and place it in its correct place in the sorted array.
// pivot can be (1st element / last element / median of the array / random element in the array).
// 2. By putting Smaller on the left, Larger on the right.  (of the pivot is how we'll place pivot in its correct place.).

function partition(arr, low, high) {
  let pivot = arr[low];
  let i = low;
  let j = high;
  // This looks like T.C -> O(N^2) but if you actually see how the loop's functioning, its going only up untill N in its worst case.
  while (i < j) {
    while (arr[i] <= pivot && i <= high - 1) {
      i += 1;
    }
    while (arr[j] > pivot && j >= low + 1) {
      j -= 1;
    }
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // Now swapping the pivot element at its correct place and returning its index.
  let temp = arr[low];
  arr[low] = arr[j];
  arr[j] = temp;
  return j;
}

function qS(arr, low, high) {
  if (low < high) {
    let partition_index = partition(arr, low, high);
    qS(arr, low, partition_index - 1);
    qS(arr, partition_index + 1, high);
  }
}

let arr = [4, 6, 2, 5, 7, 9, 1, 3];
let n = arr.length;
console.log(arr);
qS(arr, 0, n - 1);
console.log(arr);

// T.C => O(N * log(n))  | as firstly, we're splitting the array into two parts everytime. | N is becuase the partition function is going throughout the given array -> n times (worst case).
// S.C => O(1).
