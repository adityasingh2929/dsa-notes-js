// The frequency of an element is the number of times it occurs in an array.

// You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

// Return the maximum possible frequency of an element after performing at most k operations.

// Example 1:

// Input: nums = [1,2,4], k = 5
// Output: 3
// Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
// 4 has a frequency of 3.
// Example 2:

// Input: nums = [1,4,8,13], k = 5
// Output: 2
// Explanation: There are multiple optimal solutions:
// - Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
// - Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
// - Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.
// Example 3:

// Input: nums = [3,9,6], k = 2
// Output: 1

// Constraints:

// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105
// 1 <= k <= 105

let arr = [3, 9, 6];

// STEP-1: Do hashing.
let hashMap = new Map();

for (let i = 0; i < arr.length; i++) {
  hashMap.set(i, arr[i]);
}

// Step 2: Operating on each element
let k = 2;
let freqHashMap = new Map();
console.log(hashMap);

for (let i = 0; i < hashMap.size; i++) {
  // this is I's loop [0,1,2] -> Target Number
  let freq = 0;
  let temp;
  for (let j = 0; j < hashMap.size; j++) {
    // this is J's loop [0,1,2]  -> Operative Number
    let n = k;
    temp = hashMap.get(j);
    if (temp > hashMap.get(i)) {
      // Cant make other no. == target no. if (other no. > target no.)
      continue;
    }
    while (n > 0) {
      if (temp == hashMap.get(i)) {
        freq += 1;
        if (freqHashMap.has(hashMap.get(i))) {
          const freqCounter = freqHashMap.get(hashMap.get(i));
          freqHashMap.set(hashMap.get(i), freqCounter + 1);
        } else {
          freqHashMap.set(hashMap.get(i), freq);
        }
        break;
      } else {
        temp += 1;
      }
      n = n - 1;
    }
  }
}

console.log(freqHashMap);

// STEP-3: FETCHING THE MAX VALUE FROM THE HASHMAP
let cntr = 0;
let max;
freqHashMap.forEach((item) => {
  if (cntr == 0) {
    max = item;
  } else if (item > max) {
    max = item;
  }
  cntr += 1;
});
console.log(`Answer: ${max}`);

// THIS PASSED BASIC TEST CASES BUT ITS NOT FULLY CORRECT/OPTIMIZED.
