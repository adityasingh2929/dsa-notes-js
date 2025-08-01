// Lets implement our Insertion sort using Recursion.


function insertionSort(arr,i, n){
    if(i<n){
        let j = i;
        while(arr[j]<arr[j-1] && j>=1){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j -= 1;
        }
        insertionSort(arr,i+1,n);
    }
}

let arr = [23,4];
let n = arr.length;
insertionSort(arr,0,n);
console.log(arr);