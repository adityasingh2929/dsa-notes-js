// It pushes the maximum to the last (opposite of Selection Sort). Its done via adjacent comparision, followed by swapping.
// By the end of each round, we get the max val at the backmost possible

// ex: [23,1,34,56,2]
// r-1 : [1,23,34,2,56]
// r-2 : [1,23,2,34,56]
// r-3 : [1,2,23,34,56]

let arr = [23, 1, 34, 56, 2];
for (let i = arr.length - 1; i >= 1; i--) {
  let didSwap = 0;
  for (let j = 0; j < i; j++) {
    // cant be kept j<=i as when j==i i.e n-1, j+1 will give an error as that index does not exist.
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
      didSwap += 1;
    }
  }
  if (didSwap == 0) {
    break;
  }
}

console.log(arr);

// Now this went from n-1 to n-2 to up untill 1 -> n(n+1)/2  -> O(n^2);
// But the best case is if the array is already sorted, then why do we have to run the loop ahead? So yeah, for this best case scenario, we've to write a code to optimize our code for all cases.
// Therefore if the array is already sorted (best case) -> T.C = 0(N);
