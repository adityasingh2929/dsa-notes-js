// Using Euclidean Algorithm to find the HCF/GCD.

// Euclidean Algo:
//  given a,b:
//      gcd(a,b) = gcd(a-b,b)  [given that a>b]
//  ex: 15,20:
//          gcd(20,15) = gcd(5,15) = gcd(10,5) = gcd(5,5) = gcd(0,5) -> if one is 0, the other one is gcd, therefore gcd = 5.
//  Now using '-' might take a lot of iterations/time and hence not improve our time complexity than the brute-force approach.

// So we've to think otherwise, so did you notice that how we went from (20,15) to (5,15) in one step using '-', right? now it'd also take one step if we used '%' i.e (a%b,b) where a>b. Nothing changes here, right? but in some extreme cases/other cases, like (52,10) it reduces a lot of steps. Lets see how:

// gcd(52,10) = gcd(42,10) = gcd(32,10) = gcd(22,10) = gcd(12,10) = gcd(2,10) = gcd(8,2) = gcd(6,2) = gcd(4,2) = gcd(2,2) = gcd(0,2) -> Therefore, gcd (52,10) == 2.

// Now this method where we used '-' took 10 steps in total to find that the answer was '2'.

// Now using '%', lets say how much we optimized it.
// gcd(52,10) = gcd(2,10) -> gcd(10,2) = gcd(0,2)
// Did you see how we went from taking 10 steps to taking only 2? that's the optimization.

// Therefore the use of euclidean algo that we'll apply in programming would be:
//  given a,b:
//      gcd(a,b) = gcd(a%b,b) [given that a>b]
//      up untill one of them becomes 0, the other one is our GCD/HCF.

// Lets Apply this:

let a = 12;
let b = 24;

while (a > 0 && b > 0) {
  if (a > b) {
    a = a % b;
  } else {
    b = b % a;
  }
}
if (a == 0) {
  console.log(`GCD: ${b}`);
} else {
  console.log(`GCD: ${a}`);
}

// Therefore we optimized the Time.Complexity   from: O(log min(n1,n2))

// To:  O(log phi (min(a,b)))       as here, the iterations were no. of divisions. -> ans. to why log
// why phi? -> because we dont know what no. will be used, what will be their ([a/b]'s) values as it might be anything.
