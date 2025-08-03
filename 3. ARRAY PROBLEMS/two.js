// Given an array of integers nums, return the second-largest element in the array. If the second-largest element does not exist, return -1.

// Input: nums = [8, 8, 7, 6, 5]
// Output: 7
// Explanation: The largest value in nums is 8, the second largest is 7

// Input: nums = [10, 10, 10, 10, 10]
// Output: -1
// Explanation: The only value in nums is 10, so there is no second largest value, thus -1 is returned

// let arr = [7, 10, 10, 10, 10];

// let max = arr[0];
// let n = arr.length;
// let maxTwo = arr[0]
// for(let i=1;i<n;i++){
//     if(arr[i]>max) max = arr[i];
//     if(maxTwo==max){
//         if(i==n-1) maxTwo = -1;
//         else maxTwo = arr[i+1];
//     }
//     else if(arr[i]>maxTwo && arr[i]<max) maxTwo = arr[i];
// }

// console.log(maxTwo);

// Bit more understandable code:

let arr = [7, 10, 10, 10, 10];

let max = -Infinity;
let n = arr.length;
let maxTwo = -Infinity;

for (let i = 0; i < n; i++) {
  let current = arr[i];
  if (current > max) {
    maxTwo = max;
    max = current;
  } else if (current > maxTwo && current < max) {
    maxTwo = current;
  }
}

let result = maxTwo === -Infinity ? -1 : maxTwo;
console.log(result);

// Your version of approach was good! in terms of T.C and S.C but as you know, it was made complicated when it could have been much more simpler.
// T.C = O(N)    ||    S.C = O(1)