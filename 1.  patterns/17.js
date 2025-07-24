for(let i=65;i<65+4;i++){
    let row = '';
    for(let s=(((65+4)-i)-1);s>=1;s--){
        row += ' ';
    }
    for(let j=65;j<i;j++){
        row += String.fromCharCode(j);
    }
    for(let j=i;j>=65;j--){
        row += String.fromCharCode(j);
    }
    console.log(row);
}