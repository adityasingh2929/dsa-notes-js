for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let s = 5; s > i; s--) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}

for (let i = 5; i >= 1; i--) {
  let row = "";
  for (let s = 5; s > i; s--) {
    row += " ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    row += "*";
  }
  console.log(row);
}
