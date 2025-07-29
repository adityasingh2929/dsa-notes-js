// Hashing: (this is simply marking the elements stored in a datastructure so that we can operate on them/via them easily).
// Now if I had to search how many times a number appeared in an array:
// By brute-force method, it's time complexity would be O(n) as we'd have to traverse the whole array (of size n).

// Now if we'd have to search for Q number of "numbers" (like how many times they appeared), then it'd take O(Q * N) time complexity and if (Q and N would be 10**5, then it'd be 10**10 operations in total)

// As we know, the server is able to do 10**8 operations per second, so it'd take 100 seconds to complete 10**10 operations, which is really a long time and inefficient.

// So, hence, we'll use the concept of hashing:
// In hashing, we precompute the no. of times an element is appearing while forming the array itself, and then store that frequency data in a 'hash array'.

// So lets understand hashing (in case of numbers).

// Given that the max value is 12 (in this case):

let arr = [12, 3, 1, 4, 5, 6, 7, 3, 7, 7, 3, 5];

let query1 = 3;
let query2 = 12;
let query3 = 7;
let query4 = 6;
let query5 = 4;
let query6 = 1;
let query7 = 5;

let hash = new Array(1000).fill(0);
for (let i = 0; i < arr.length; i++) {
  hash[arr[i]] += 1;
}

console.log(hash);




// If max. element is  10**7, then the array has to be of size (10**7+1, this is because we'll have indexes from 0 to up untill 100**7 since array is a sequential collection) which is feasible, but if we get any bigger element than that (10**8, etc.) then arrays dont work.


// So for handling such bigger values, we'll have to switch data-structures.