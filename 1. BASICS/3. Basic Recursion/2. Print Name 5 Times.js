// Write a program to print name 5 times using Recursion.

function Print_Name(cnt, name){
    if(cnt>5){
        return;
    }
    console.log(name);
    Print_Name(cnt+1, name);

}

let cnt = 1;
let name = "ADITYA SINGH";
Print_Name(cnt, name);