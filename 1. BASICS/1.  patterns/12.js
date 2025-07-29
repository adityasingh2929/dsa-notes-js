for(let i=1;i<=4;i++){
    let row = '';
    for(let j=1;j<=i;j++){
        row += j;
    }

    for(let s=1;s<=(4*2)-(2*i);s++){
        row+= ' ';
    }
    
    for(let j=i;j>=1;j--){
        row += j;
    }

    console.log(row);

}