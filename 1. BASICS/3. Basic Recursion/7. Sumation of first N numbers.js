// Write a Program to give sumation of the first N numbers using Recursion.

let sum = 0;

function sumation(cnt, n) {
  if (cnt > n) {
    return;
  }
  sum += cnt;
  sumation(++cnt, n);
}

let n = 11;
// sumation(1,n);
// console.log(sum);

// Another approaches I think I can do here is: [parameterised approach -> when I've to print]

function parameters_approach() {
  // Here, everything is occuring in the parameters being passed itself.
  function sumation(cnt, sum) {
    if (cnt < 1) {
      console.log(sum);
      return;
    }
    sumation(cnt - 1, sum + cnt); // there's a difference in cnt-1 and --cnt, --cnt updates the cnt's value so the next parameter (sum+cnt) gets one less value of cnt, hence we were getting one short of our actual sumation everytime.
  }
  let n = 10;
  sumation(n, 0);
}

parameters_approach();

// Another approach is: [functional approach -> when you've to return]

function functional_approach() {
  // This is the functional approach, i.e more cleaner code.
  function sumation(n) {
    if (n == 0) {
      return 0;
    }
    return n + sumation(n - 1);
  }
  let result = sumation(11);
  console.log(result);
}
functional_approach();

// Both of these versions are way cleaner and optimized than my version of solving the problems. As I had written a scattered code where the sumation/factorial variable was declared in the global scope, but was only getting used in its respective functional scope.
