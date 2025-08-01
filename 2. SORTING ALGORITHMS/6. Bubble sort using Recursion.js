// Implementing Bubble Sort using recursion.

function bubbleSort(arr,high){
    if(high==0) return;
    let didSwap = 0;
    for(let j=0;j<high;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            didSwap = 1;
        }
    }
    if(didSwap==0) return;
    bubbleSort(arr,high-1);
}

let arr = [23,4];
let n = arr.length;
bubbleSort(arr,n-1);
console.log(arr);