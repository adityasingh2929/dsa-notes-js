let counter = 0;
for(let i=0;i<5;i++){
    let row = '';
    for(let j=0;j<=i;j++){
        counter += 1;
        row += counter;
        row += ' ';
    }
    console.log(row);
}