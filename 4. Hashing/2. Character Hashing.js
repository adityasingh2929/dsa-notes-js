// Now what if, instead of an array of numbers, we're given a string and asked, how many times does each character in the string appears? Lets see how we do that:

let str = "adityasingh";
let ref = "a";

let hash = new Array(26).fill(0);
for (let i = 0; i < str.length; i++) {
  hash[str.charCodeAt(i) - ref.charCodeAt(0)] += 1; // created an offset for only lowercase alphabets such that it maps a -> 0 and so on.
}

console.log(hash);

// Now this hashing method is good for only lowercases alphabets.
// If we'd have space, symbols, uppercases alphabets, etc. Things would have to be different.
// Since there are total 256 characters. We'll then declare the hash to be of size 256. Then this way, we wont need to create an offset as the first one goes to 0 by default as its its actuall ASCII code. That way, 'a' -> 97 and etc. Hence here, the mapping will actually be legit and accurate.

let hashh = new Array(256).fill(0);
for (let i = 0; i < str.length; i++) {
  hashh[str.charCodeAt(i)] += 1; // created an offset for only lowercase alphabets such that it maps a -> 0 and so on.
}

for(let i=90;i<131;i++){
    console.log(`${i} : ${hashh[i]}`);
}