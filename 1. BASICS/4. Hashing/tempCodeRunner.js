/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  // STEP-1: Do hashing.
  let hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(i, nums[i]);
  }

  // Step 2: Operating on each element
  let freqHashMap = new Map(); // This is for hashing the operated values;

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

  return max;
};

