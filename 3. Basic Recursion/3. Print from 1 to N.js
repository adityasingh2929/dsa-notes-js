// Write a Program to print from 1 to N using Recursion.

function printing(cnt, n){
    if(cnt>n){
        return;
    }
    console.log(cnt);
    printing(++cnt, n);
}

let n = 7;
let cnt = 1;
printing(cnt,n);
