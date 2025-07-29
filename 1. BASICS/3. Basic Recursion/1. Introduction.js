// What is Recursion?
//      Recursion is when a function keeps on calling itself until a specified condition is met.

// This is also an approach to solve problems. (instead of using the for loops and all).

function f(c) {
  if (c == 6) {
    // BASE CONDITION
    return;
  }
  console.log(c);
  f(c + 1);
}

let c = 1;
f(c);

// If we've not mentioned a condition, it'll run untill the stack overflows (the stack that contains the function calls). [as the previous function calls are still in the stack, waiting to be finished as before they got completed, a new function call was added.].

// lets talk about the recursion tree:
// f() <-> f() <-> f() <-> f() <-> f() <-> f() [this returns]
