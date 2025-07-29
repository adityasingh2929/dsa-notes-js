// Write a Program to print numbers from 1 to N using Backtracking in Recursion.

function printing(cnt) {
  if (cnt == 1) { // Its kept cnt==n as that same cnt is going to get passed as the cnt value for its previous function. If it was cnt<1 then it'd become true for 0 and in that case, the 0 would be passed to the prev function as its cnt value and the printing then would start from 0, which we dont want.
    return;
  }
  printing(--cnt); // this --cnt is what our value for cnt in next line for its current function will be, while backtracking.
  console.log(cnt);
}

let n = 5;
printing(n + 1);
