const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

// Please Write your code here.

let sum = 0
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        for(let k = j + 1; k < arr.length; k++) {
            if(arr[i] <= arr[j] && arr[j] < arr[k]) {
                sum++
            }
        }
    }
}

console.log(sum)