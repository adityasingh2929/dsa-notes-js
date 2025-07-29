for(let i=(65+5)-1;i>=65;i--){
    let row = '';
    for(let j=65;j<=i;j++){
        row += String.fromCharCode(j);
    }
    console.log(row);
}