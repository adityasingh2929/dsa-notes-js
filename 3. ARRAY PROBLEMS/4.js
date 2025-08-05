// array: [1,1,2] -> [1,2,1] with k = 2;

// function duplicatesRemover(arr){
//     let i=0;
//     let j = i+1;
//     let n = arr.length;
//     while(arr[i]<=arr[j] && i<n-1){
//         if(arr[i]==arr[j]){
//             let end = j;
//             while(end<n-1){
//                 let temp = arr[end];
//                 arr[end] = arr[end+1];
//                 arr[end+1] = temp;
//                 end += 1;
//             }
//             continue;
//         }
//         else{
//             i += 1;
//             j += 1;
//         }
//     }
//     return i+1;

// }


// console.log(arr);
// console.log(k);
// console.log(arr);


// NOT GOOD ENOUGH TO GET ACCEPTED!











// -------------------------------------------------------------------------------------- //

// Brute force approach:

// function duplicatesRemover(arr){
//     let set = new Set(arr);
//     for(let i=0;i<=set.size;i++){
//         arr[i] = set
//     }
// }



// let set = new Set(1,3,4,5);

// console.log(set, typeof set);





//  -------------------------------------------------------------------------------- //

// Optimized approach:    -> TWO POINTERS APPROACH.

function duplicatesRemover(arr){
    let i=0;
    let unique = arr[0];
    let k = 1;
    for(let j=0;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            let unique = arr[j];
            i = i+1;
            arr[i] = unique;
            k = k+1;
        }
    }
    return k;   
}

let hello = [0,0,1,1,1,2,2,3,3,4];
console.log(duplicatesRemover(hello));
console.log(hello);