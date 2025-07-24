// find the GCD/HCF of the given two numbers.

// Now we can find their factors, then find common factors and the largest one will be the GCD/HCF
// Or even more brute force approach, we can loop from 1 till the smallest of the two numbers and see which one divides both the nmbers.

// Or we Can just accumulate the factors of the smallest of the two number, then find which one divides the other and is the greatest, it'll keep on getting replaced.

// let x = 15;
// let y = 45;

// let gcd = 1;
// let small, big = 0;

// if(x>y){
//     small = y;
//     big = x;
// }else{
//     small = x;
//     big = y;
// }

// for(let i=1;i*i<=small;i++){
//     if(small%i==0 && big%i==0){
//         gcd = i;
//         if(small/i != i){
//             if(big % (small/i) == 0){
//                 if(small/i > gcd){
//                     gcd = small/i;
//                 }
//             }
//         }
//     }
// }

// console.log(`HCF OF ${x} AND ${y} IS: ${gcd}`);

// OVER-ENGINEERED it to the extent that its complicated.

// --------------------------------------------------------------------------------------------- //
// Lets go with the optimized-bruteforce method:

let gcd = 1;
for (let i = Math.min(n1, n2); i >= 1; i--) {
  // running backwards and up untill the min. no. only to optimize the code.
  if (n1 % i == 0 && n2 % i == 0) {
    gcd = i;
    break; // since we're finding the highest factor, as we're looping backwards, the first one to satisfy this condition will be the HCF, right? so why go beyond that.
  }
}

// Using this, our T.C still is -> O(min(n1,n2)) but it surely improves avg case scenario
