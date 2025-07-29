// Find the minimum value -> swap with the foremost element possible -> reduce the search space

// EX: [2,3,4,56,7]
// r-1 : [2,3,4,56,7]
// r-2 : [2,3,4,56,7]
// r-3 : [2,3,4,56,7]
// r-4 : [2,3,4,7,56]  (7 was minimum and was swapped with element at the foremost place possible).

let arr = [2, 3, 4, 56, 7];
let mini;
for (let i = 0; i < arr.length - 1; i++) {
  mini = i;
  let didSwapIndex = 0;
  for (let j = i; j <= arr.length - 1; j++) {
    if (arr[j] < arr[mini]) {
      mini = j;
    }
  }
  let temp = arr[i];
  arr[i] = arr[mini];
  arr[mini] = temp;
}

console.log(arr);

// its like running for n times -> n-1 times -> n-2 times -> .. -> 2 times = kind of like sum of first n numbers,
// therefore T.C = [n (n+1)]/2 = n^2/2 + n/2 = O(n^2);

// Here if the array is already sorted, we dont have a way of finding that out (like in bubble sort as there we used to compare all adjacent values.) because here we only focus on finding the 'min' value.So if the min value is already in place, we move ahead (but this obv. doesnt tell us that the array is sorted.)
