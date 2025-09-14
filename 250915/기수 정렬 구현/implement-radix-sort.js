const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please write your code here.

function getMaxLength(arr) {
    let strArr = arr.map(String)
    return strArr.sort((a, b) => b.length - a.length)[0]
}

function radix_sort(arr) {
    let maxLength = getMaxLength(arr)
    for(let pos = 0; i < maxLength; i++) {
        let radix_arr = new Array({ length : 10}, () => [])
        
    }
}