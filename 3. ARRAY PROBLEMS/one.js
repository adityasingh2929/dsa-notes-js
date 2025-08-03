// Given an array of integers num, return the value of the largest element in the array

// [3, 3, 6, 1]   OUTPUT: 6 
// [3, 3, 0, 99, -40] OUTPUT: 99

// let arr = [3, 3, 0, 99, -40];
// let n  = arr.length;
// for(let i=n-1;i>n-2;i--){
//     for(let j=0;j<i;j++){
//         if(arr[j] > arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }

// console.log(arr[n-1]);



// T.C = O(N)  || S.C = O(1)              
// [thinking quick sort would be efficient? no, as its gonna run it whole and then get you your largest element at the end of the algorithm. So its time complexity is bound to be O(N log n) which is complex/less optimized than O(n)].
// Your current way is optimized but you can still do better by writing an understandable code cause you over-enginereed it as of now, as no bubble sort was needed for this:


let anotherArr = [2,4,56,6];
let l = anotherArr.length;
let max = anotherArr[0];


for(let i=1;i<l;i++){
    if(anotherArr[i]>max){
        max = anotherArr[i];
    }
}

console.log(max);
