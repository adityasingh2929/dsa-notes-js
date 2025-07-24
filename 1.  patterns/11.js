for(let i=1;i<=5;i++){
    let row = '';
    let p;
    if(i%2==0){
        p = 0; 
    }else p=1;
    for(let j=1;j<=i;j++){
        if(j!=1){
            if(p==1){
                p=0;
            }else{p=1}
        }
        row += p;
    }
    console.log(row);
}