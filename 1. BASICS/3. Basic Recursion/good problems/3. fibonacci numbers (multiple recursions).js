// Now we'll see the concept of multiple recursion call inside a function, using fibonacci problem (later we'll see this approach in problems like n-queens, etc.).

function fibonacci(n){
    if(n<=1){
        return n;
    }
    let last = fibonacci(n-1);
    let slast = fibonacci(n-2);
    return last+slast;
}

console.log(fibonacci(4));


// Time Complexity is nearly ~ O(2^n);