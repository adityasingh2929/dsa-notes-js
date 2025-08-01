// selection sort:
// Selects minimum/maximum each round.
// This is a reverse sort().

// let arr = [12,34,6,34,23,55,3];
// for(let i=0; i<arr.length-1;i++){
//     let max = i;
//     for(let j=i;j<arr.length;j++){
//         if(arr[j]>arr[max]){
//             let temp = arr[max];
//             arr[max] = arr[j];
//             arr[j] = temp;
//         }
//     }
// }

// console.log(arr);

// T.C -> O(n^2);  || S.C -> O(1)

// Bubble Sort:
// Puts the Max/min value at the end of the array, per round.
// Adjacent Comparisions each round.

// let arr = [12, 34, 6, 34, 23, 55, 3];

// for(let i=arr.length-1;i>=1;i--){
//   let didSwap = 0;
//   for(let j=0;j<i;j++){
//     if(arr[j+1]<arr[j]){
//       let temp = arr[j];
//       arr[j] = arr[j+1];
//       arr[j+1] = temp;
//       didSwap = 1;
//     }
//   }
//   if(didSwap==0){
//     console.log("Array already sorted!");
//     break;
//   }
// }

// console.log(arr);

// This swapInfo variable provides us optimization in the best case scenario, by putting it that way, if the array is already sorted or gets sorted mid-way, then we can know and exit out of the looping.

// T.C -> O(n^2) in avg and worst case , O(N) in best case.   ||  S.C = O(1)

// Insertion Sort:
// Here, we expand our search space and keep on placing the right most element in its correct place by swapping it with previous (to its left) elements, untill its in its correct position.

// for (let i = 0; i < arr.length; i++) {
//   let j = i;
//   while (j > 0 && arr[j - 1] > arr[j]) {
//     let temp = arr[j - 1];
//     arr[j - 1] = arr[j];
//     arr[j] = temp;
//     j -= 1;
//   }
// }

// console.log(arr);

// T.C -> O(N^2) [worst and avg case] || S.C -> O(1)
// best case time complexity -> O(N)  [when array is already sorted, hence the inner loop wont be executed.].

// Now comes Merge Sort.

// function merge(arr, low, mid, high) {
//   let temp = new Array();
//   let left_start = low;
//   let right_start = mid + 1;
//   while (left_start <= mid && right_start <= high) {
//     if (arr[left_start] <= arr[right_start]) {
//       temp.push(arr[left_start]);
//       left_start += 1;
//     } else {
//       temp.push(arr[right_start]);
//       right_start += 1;
//     }
//   }

//   while (left_start <= mid) {
//     temp.push(arr[left_start]);
//     left_start += 1;
//   }
//   while (right_start <= high) {
//     temp.push(arr[right_start]);
//     right_start += 1;
//   }

//   for (let i = low; i <= high; i++) {
//     arr[i] = temp[i - low];
//   }
// }

// function mS(arr, low, high) {
//   if (low >= high) {
//     return;
//   }
//   let mid = Math.trunc((high + low) / 2);
//   mS(arr, low, mid);
//   mS(arr, mid + 1, high);
//   merge(arr, low, mid, high);
// }

// mS(arr,0,n-1)
// console.log(arr);

// It has T.C -> O(n logn) and S.C -> O(N)

// Now, ONTO QUICK SORT:
// Here we find a pivot and then place it in its correct order & then we'll have two arrays, either side of the pivot/Partition index, which then will go through the same process of correction, unitl low>=high.

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

let arr = [12, 34, 6, 34, 23, 55, 3];
let n = arr.length;
qS(arr, 0, n - 1);
console.log(arr);

// T.C -> O(n logn)   || S.C -> O(1)
