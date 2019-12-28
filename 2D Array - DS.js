'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
var mtx = [];
mtx = arr;
var soma = -9999;
var result;
var sub = [];

for(let i = 0; i < mtx.length -2; i++){
    for(let j = 0; j < mtx.length -2; j++){
        
        sub[0] = mtx[i].slice(j,j+3);
        sub[1] = mtx[i+1].slice(j,j+3);
        sub[2] = mtx[i+2].slice(j,j+3);
        console.log(sub);
        result = mtx_check(sub);
        
        if(result > soma){
            soma = result;
        }
    }
}

return soma;
}

function mtx_check(sub_mtx) {
    let sub_soma = 0;
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(!((i == 1) && (j == 0 || j == 2) )){
                sub_soma = sub_soma + sub_mtx[i][j];
            }
        }
    }
    return sub_soma;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
