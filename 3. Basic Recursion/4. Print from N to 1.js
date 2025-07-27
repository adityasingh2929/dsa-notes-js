// Write a program to print from N to 1 using Recursion.

function printing(cnt) {
  if (cnt < 1) {
    return;
  }
  console.log(cnt, typeof cnt);
  printing(--cnt); // from here on, as the datatype is diff., the JS converts the obj to number, hence the array object doesnot changes and breaks a misconception of always changing as its a primitive datatype (i.e passed by reference).
}
let n = [9];
printing(n); // passing simply the name means that we're passing the first element only.
console.log(n[0]);
