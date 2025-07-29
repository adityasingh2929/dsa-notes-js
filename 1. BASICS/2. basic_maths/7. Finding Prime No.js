// Firstly, get this definition of Prime Numbers right:
    // Its not "a no. divisible by 1 and itself" -> because exception: 1.
    // Its "a no. that has exactly two factors." -> no exceptions here.


// Brute-Force approach:

let y = 1;
let c = 0;
for(let i=1;i<=y;i++){
    if(y%i==0){
        c += 1;
    }
}
if(c==2){
    console.log("Prime");
    
}else{
    console.log("Not a Prime");
    
}

// T.C -> O(n)












let x = 1;
let counter = 0;
for(let i=1;i*i<=x;i++){
    if(x%i==0){
        counter += 1;
        if(x/i!=i){
            if(x/i % i==0){
                counter += 1;
            }
        }
    }
}
if(counter==2){
    console.log("Prime No.");
}else{
    console.log("Not a prime No.");
}

// T.C -> O(sqrt(n)) | used the factors trick to reduce the time complexity.