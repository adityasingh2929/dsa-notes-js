// So, we'll be using Map for hashing, since map only stores the required numbers, not all the numbers (from 0 up untill the max element) like array. So storing a value such as 10**18 wont be difficult since it wont require storing from 0 to 10**8 (since its not array). It'll just map 10**18 with its frequency.

let arr = [5, 2, 2, 3, 1, 4, 2, 5, 5, 1];
let str = "aditya singh"; // you can also use string here without requiring its conversion as Map() can take strings,etc. as key (whereas arrays couldnt, they'd only take numbers).
const hashMap = new Map();

for (const i of str) {
  if (hashMap.has(i)) {
    const freqCounter = hashMap.get(i);
    hashMap.set(i, freqCounter + 1);
  } else {
    hashMap.set(i, 1);
  }
}

// A map is ordered, i.e the first key it'll get will remain first. You can check that by re-arranging the values of the array.
console.log(hashMap);

//  There's nothing like unordered map (exactly) in JS, objects in JS are unordered, but they're also ordered (hence they're hybrid)

// In c++ -> ordered maps have o(log n) [for avg. and best. case] time complexity for .get() and .set() [maps]
// whereas for unordered maps -> they've o(1)  [for avg. and best. case] time complexity for .get() and .set() [maps]
// and the worst case for both above is O(K) where K's the no. of elements in the map.

// Now, In JS..the maps are hybrid (i.e they're ordered and also give O(1) time complexity for .get() and .set() in most cases. But might give O(k) in worst case [it very rarely occurs], making the total hashing process O(K*N), which is bad.)

// NOW, HOW DOES THE WORST CASE OCCUR???   -> its due to collisions.

// BEFORE UNDERSTANDING COLLISIONS:

// first, lets understand how does 'HASHING' works:
// "DIVISION METHOD"   (using Maps() or Arrays() for hashing when there's individual element's size limit.) (as we saw that when there's no limit, its just easy to do in both arrays and maps)
// array -> [2,5,16,28,139,38,48,28,18]

// lets say that I cant store an element of size grtr than 10. Therefore the size of the array will be 10? right? (because since we hash the values as indexes and their frequencies as values in arrays. Its not the case in maps as there we can have random or any type of values as 'key').

// So, we'll use the division method where we '%' every number by 10 and then store its freq. count in whatever answer it gives (0-9).
// 0 -> 2 -> 5
// 1
// 2
// 3
// 4
// 5
// 6 -> 16
// 7
// 8 -> 18 -> 28 -> 28 -> 38 -> 48  (these were in order of input but now are sorted -> by using linked list. (i.e with the help of chaining))  [this is effective if a limited no. of values is there.]
// 9 -> 139

// Now what we've done is that we've chained the values with the array using linked list, such that, one index can keep multiple values.

// NOW IF I all the values that I had to hash, somehow ended up in the same hashplace (lets say 8) ("and if the no. of them is large", then in order to find a particular no.'s frequency is really difficult)
// and that is when collisions occur, hence we get the worst case scenario.
// Hence we said that its really rare to happen!
