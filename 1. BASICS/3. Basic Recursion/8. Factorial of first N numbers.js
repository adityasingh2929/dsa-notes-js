// Write a Program to calculate the factorial of first N numbers.

let facto = 1;

function factorial(cnt){
    if(cnt<1){
        return;
    }
    facto *= cnt;
    factorial(--cnt);
}

let n = 5;
// factorial(n);
// console.log(facto);



// -------------------------------------------------------------------------------------------- //
// Parameterised approach:

function parameters_approach(){

    function factorial(n,facto){
        if(n<1){
            console.log(facto);
            return;
        }
        factorial(n-1,facto*n);
    }
    let n = 4;
    factorial(n,1);
}

parameters_approach()


function functional_approach(){

    function factorial(n){
        if(n==1){
            return 1;
        }
        return n * factorial(n-1);
    }
    let result = factorial(4);
    console.log(result);

}

functional_approach();