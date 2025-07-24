let x = 1634;
let size = String(x).length;

if (x == 0) {
  console.log("Its an armstrong number.");
} else if (x < 0) {
  console.log("Not an armstrong number");
} else {
  let ref = x;
  let sum = 0;
  while (ref > 0) {
    let digit = ref % 10;
    sum += digit ** size;
    ref = Math.trunc(ref / 10);
  }

  if (sum == x) {
    console.log("Its an Armstrong Number");
  } else {
    console.log("Its not an Armstrong Number");
  }
}

// Solved the test/edge-cases of 0 and -ve numbers.
