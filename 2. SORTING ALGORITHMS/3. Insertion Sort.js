// Insertion Sort takes an element and places it in its correct order.

// EX : [14,9,15,12,6,8,13]

// R-1 : Search Space (ss) = 14 | is 14 in the right place? YES.
// R-2 : SS = 14,9 | is 9 in right place, NO. Swap it untill it goes to its right place.
// R-3 : SS = 9,14,15 | is 15 in right place? YES.
// R-4 : SS = 9,14,15,12 | swap 12 untill its in the right place.
// R-5 : SS = 9,12,14,15,6 | swap 6 untill its in the right place.
// R-6 : SS = 6,9,12,14,15,8 | swap 8 until its in the right place.
// R-7 : SS = 6,8,9,12,14,15,13 | swap 13 until its in the right place.
// ANSWER : [6,8,9,12,13,14,15];

let arr = [14, 9, 15, 12, 6, 8, 13];
for (let i = 0; i < arr.length; i++) {
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    // here its not j>=0 as even if we've to put it on the 0th index, the element would at max be at 1, not at 0 dude. (coz its where it has to placed, so obv its not there right now.).
    let temp = arr[j - 1];
    arr[j - 1] = arr[j];
    arr[j] = temp;
    j -= 1;
  }
}

console.log(arr);

// worst case/avg case complexity -> O(n^2);

// best case time complexity -> O(n);  // as the inner loop wont run as the prev element wont be bigger.
