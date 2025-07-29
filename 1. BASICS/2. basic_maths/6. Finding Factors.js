// Printing all divisors of a number.

// let x = 36;
// divisors = [];

// for (let i = 1; i <= x; i++) {
//     if (x % i == 0) {
//         divisors.push(i);
//     }
// }

// console.log(divisors);

// LEARNING:
// T.C = O(n)

// To optimize this code, we know that:
// ex: 36 -> factors = 1,2,3,4,6,9,12,18,36
// now:    1 * 36 = 36
//             2 * 18 = 36
//             3 * 12 = 36
//             4 * 9 = 36
//             6 * 6 = 36        // up untill here only, we got all of our factors, so why go ahead?
//             9 * 4 = 36
//             12 * 3 = 36
//             18 * 2 = 36
//             36 * 1 = 36

//  i * (36) = N(36) , we can get this 36 by -> N/i
//     but we've to be careful as we might get a duplicate value (6 in this case). So we'll use an if statement to avoid that.

let x = 36;
divisors = [];

for (let i = 1; i * i <= x; i++) {
  // simply didnt use 'Math.sqrt(x)' as it calls the function and takes time and 6*6 = 36, 7*7 = 49 which is grtr than 36.
  if (x % i == 0) {
    divisors.push(i);
    if (i != x / i) {
      divisors.push(x / i);
    }
  }
}

// this time complexity -> O(f * log(f))  where f is the no. of factors.
console.log(divisors.sort((a, b) => a - b)); // this is for asceinding order, for desceinding -> b - a and simply using .sort() converts all the elements in strings and then compares them lexicographically (by alphabetical order.).

// Now since they're unsorted and we also dont know what the size will be for this array, In c++ or java we used vectors/collections, what about JS? What will we use to store any much values without an error and what'll we do to sort this information of factors?

// So in JS, Arrays are dynamic, so no need to worry about the storing thing, about the sorting thing, we can sort the array simply by using the .sort() method.

// therefore, overall T.C => O(sqrt(n)) + O(f * log(f)).