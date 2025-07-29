for(let i=65;i<65+5;i++){
    let row = '';
    for(let j=65;j<=i;j++){
        row += String.fromCharCode(i);
    }
    console.log(row);
}