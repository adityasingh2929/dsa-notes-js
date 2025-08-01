// Here we'll use all the sorting algorithms that we've learned, to reverse sort an array.

function selectionSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let max = i;
    for (let j = i; j < n; j++) {
      if (arr[i] < arr[j]) {
        max = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[max];
    arr[max] = temp;
  }
  console.log(arr);
}

function bubbleSort(arr, n) {
  for (let i = n - 1; i >= 1; i--) {
    let didSwap = 0;
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[j + 1]) {
        didSwap = 1;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (didSwap == 0) {
      break;
    }
  }
  console.log(arr);
}

function insertionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    let j = i; // passed i's reference to j so that I can keep on swapping/bringing the ith element forward to its correct place, without altering my i's value as its crucial to iterate the whole array.
    while (arr[j - 1] <= arr[j] && j > 0) {
      // j>=0 is not used as the comparing will go upto 1 then j-1 = 0, if we'd kept it, then when j=0 then j-1 would've been non existent.
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j -= 1;
    }
  }
  console.log(arr);
}

function merge(arr, low, mid, high) {
  let temp = new Array();
  let left_start = low;
  let right_start = mid + 1;
  while (left_start <= mid && right_start <= high) {
    if (arr[left_start] > arr[right_start]) {
      temp.push(arr[left_start]);
      left_start += 1;
    } else {
      temp.push(arr[right_start]);
      right_start += 1;
    }
  }
  while (left_start <= mid) {
    temp.push(arr[left_start]);
    left_start += 1;
  }
  while (right_start <= high) {
    temp.push(arr[right_start]);
    right_start += 1;
  }
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mS(arr, low, high) {
  if (low < high) {
    let mid = Math.trunc((high + low) / 2);
    mS(arr, low, mid);
    mS(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
}

function partition(arr, low, high) {
  let i = low;
  let j = high;
  let pivot = arr[low];
  while (i < j) {
    while (arr[i] >= pivot && i <= high - 1) {
      i += 1;
    }
    while (arr[j] < pivot && j >= low + 1) {
      j -= 1;
    }
    if (i < j) {
      // this means that the i and j pointer have stopped on two such values that are greater/smaller but in smaller/greater zone respectively
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  // If previous was not the case then it means that we've the array almost sorted, now its just that we've to swap our pivot to its correct position in the array [if its there or its not, we'll do it anyways]
  // And also, previous swap occured in the condition of (i<j). This will be occuring if (i>j) which'll mean that all the elements are in their correct position. OR it'll be (i==j) -> which'll still mean that all the elements are in their correct position.
  // Just need to swap the partition element to its original index [regardless of it its already there] and return it.
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

let arrOne = [43, 6, 7, 11, 22, 1];
let arrTwo = [43, 6, 7, 11, 22, 1];
let arrThree = [43, 6, 7, 11, 22, 1];
let arrFour = [43, 6, 7, 11, 22, 1];
let arrFive = [43, 6, 7, 11, 22, 1];
let n = arrOne.length;
selectionSort(arrOne, n);
bubbleSort(arrTwo, n);
insertionSort(arrThree, n);
mS(arrFour, 0, n - 1);
console.log(arrFour);
qS(arrFive, 0, n - 1);
console.log(arrFive);
