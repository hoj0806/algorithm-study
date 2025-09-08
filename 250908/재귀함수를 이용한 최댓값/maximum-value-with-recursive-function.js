const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// Please Write your code here.

let max = 0

function findMaValue(n) {
    if(n < 0) {
        return
    }

    if(arr[n-1] > max) {
        max = arr[n-1]
    }

    findMaValue(n-1)
}

findMaValue(n)
console.log(max)