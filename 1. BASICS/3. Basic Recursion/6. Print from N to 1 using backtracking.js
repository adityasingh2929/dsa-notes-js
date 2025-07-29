// Write a Program to print from N to 1 by backtracking using Recursion.

function printing(cnt, n) {
  if (cnt == n) {   // Its kept cnt==n as that same cnt is going to get passed as the cnt value for its previous function.
    return;
  }
  printing(++cnt, n); // this --cnt is what our value for cnt in next line for its current function will be, while backtracking.
  console.log(cnt);
}

let n = 7;
printing(0, n);  // we've passed 0 (not 1) because the ++cnt is going to be the cnt value, if it'd be 1 then printing is going to start from 2.
