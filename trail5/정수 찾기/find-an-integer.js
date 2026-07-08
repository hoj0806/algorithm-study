const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr1 = input[1].trim().split(' ').map(Number);
const m = Number(input[2]);
const arr2 = input[3].trim().split(' ').map(Number);

// Please Write your code here.


let set = new Set(arr1)

for(let i = 0; i < arr2.length; i++) {
    if(set.has(arr2[i])) {
        console.log(1)
    } else {
        console.log(0)
    }
}