// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

// There may be duplicates in the original array.

// Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
// Example 2:

// Input: nums = [2,1,3,4]
// Output: false
// Explanation: There is no sorted array once rotated that can make nums.
// Example 3:

// Input: nums = [1,2,3]
// Output: true
// Explanation: [1,2,3] is the original sorted array.
// You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.

// let arr = [1,2,3];       // Normal ideal sorted case done.
// let arr = [2,1,5];       // Normal ideal unsorted case done.
// Now its time for truly checking the unsorted cases, as there are two -> one's ideal and the other one's not.

// How can I find that the given array can actually be sorted?? for that I need to find the minimum element and then I need to rotate the array such that the minimum one comes at the start. I've to keep in mind that I'm not sorting the array, I'm just trying to rotate it to see if the array's sorted or not.

let nums = [3,4,5,1,2];

let n = nums.length;
let comparisions = 0;
let min = nums[0];
let minPos = 0;

console.log(nums);

// Finding the Minimum element and its index in the array.
for(let i=0;i<n;i++){
    let current = nums[i];
    if(current<min){
        min = current;
        minPos = i;
  
    }
}

console.log(min, minPos);

// Rotating the array such that the minimum element comes to index = 0.
// Essentially it will be i%n where n = arr.length.

let calcArr = new Array(n).fill(0);

if(minPos!=0){
    for(let i=0;i<n;i++){
        let ans = i%n;
        nums[i] = calcArr[i-ans];
    }
}

console.log(calcArr);

// Now such that the minimum index is at 0, or it already was, then we can check if the array's sorted or not.

for(let i=0;i<n-1;i++){
    if(calcArr[i] < calcArr[i+1]){
        ++comparisions;
    }
}
if(comparisions===n-1) console.log(true);
else console.log(false);



// [23,1,45,0] -> [23,1,0,45] -> [23,0,1,45] -> [0,23,1,45]
// [23,1,45,0] -> [0,23,1,45]


