// left Rotate an array by 1 position.
// let ans = [1, 2, 3, 4, 5];
// let first = ans[0];
// for (let i = 1; i < ans.length; i++) {
//   ans[i - 1] = ans[i]; // my mistake was that I was iterating from 0 to n-1 and then i was putting arr[i] = arr[i-1] values. That just meant that I was just taking i-1 index's value untill the last by swapping.
// }
// ans[ans.length - 1] = first;
// console.log(ans);

// console.log();

// // Right Rotate an array by 1 position.
// let ansTwo = [1, 2, 3, 4, 5];
// let last = ansTwo[ansTwo.length - 1];
// for (let i = ansTwo.length - 2; i >= 0; i--) {
//   ansTwo[i + 1] = ansTwo[i];
// }
// ansTwo[0] = last;
// console.log(ansTwo);

// console.log();

// // Right Rotate an array by k positions.

// // Brute-Forced approach:     (mine)
// let arr = [1, 2, 3, 4, 5];
// const n = arr.length;
// let temp = 0;
// let k = 1;
// let prev = 0;
// for (let c = 0; c < k; c++) {
//   for (let i = 0; i < n; i++) {
//     let prevIndex = (i + n - 1) % n;
//     if (i == 0) prev = arr[prevIndex];
//     temp = arr[i];
//     arr[i] = prev;
//     prev = temp;
//   }
// }

// console.log(arr);



// Left Rotate an array by k positions.

// Brute-forced approach (striver's)

// let arrVar = [10,20,30,40,50,60,70];
// let d = 3;
// let tempoArr = new Array(d);
// for(let i=0;i<d;i++){
//   tempoArr[i] = arrVar[i];
// }

// let size = arrVar.length;
// for(let i=d;i<size;i++){
//   arrVar[i-d] = arrVar[i];
// }

// for(let i=size-d;i<size;i++){
//   arrVar[i] = tempoArr[i-(size-d)];
// }

// console.log(arrVar);


// t.c -> O(n+d)   || s.c -> O(d)


// OPTIMIZED APPROACH (striver's)
  // we'll reverse the first d elm, then the n-d elm, and then the resultant array. 

let arr = [10,20,30,40,50];
let d = 3;   // ans = [40,50,10,20,30] after rotating from left by 3 places.

for(let i=0;i<d;i++){
  
}