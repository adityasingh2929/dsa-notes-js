let arr = [2, 2, 2, 2, 2];
let new_arr = [...arr];
let rev_item = 0;
arr.forEach((item) => {
  while (item !== 0) {
    let digit = item % 10;
    rev_item = rev_item * 10 + digit;
    item = Math.trunc(item / 10);
  }
  new_arr.push(rev_item);
  rev_item = 0;
});

let distinct_arr = [];
new_arr.forEach((item) => {
  let duplicate_info = 0;
  for (let i = 0; i < distinct_arr.length; i++) {
    if (item == distinct_arr[i]) {
      duplicate_info = 1;
    }
  }
  if (duplicate_info == 0) {
    distinct_arr.push(item);
  }
});

console.log(distinct_arr.length);

// My method, but its inefficient for large set of data, hence it'll give 'TIME LIMIT EXCEEDED' on leetcode when you submit it as it wont be able to pass the large test cases.

// CHATGPT METHOD:

var countDistinctIntegers = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const original = nums[i];
    set.add(original);

    let reversed = 0;
    let temp = original;

    while (temp !== 0) {
      reversed = reversed * 10 + (temp % 10);
      temp = Math.trunc(temp / 10);
    }

    set.add(reversed);
  }

  return set.size;
};

// This one beats 100% (in runtime), really efficient.

// LEARNING:
// Here we learned efficient usage of data structures, given here that we needed to give the count of distinct elements, we just used 'set' as it only stores distinct values, this saved us a lot of time.
