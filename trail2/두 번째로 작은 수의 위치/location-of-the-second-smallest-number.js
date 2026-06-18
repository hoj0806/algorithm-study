const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);

// Please Write your code here.


let arr = [...new Set([...a].sort((a, b) => a - b))]

if(arr.length === 1) {
    console.log(-1)
} else {
    if([...a].filter((i) => i === arr[1]).length === 1) {
        console.log(a.indexOf(arr[1]) + 1)
    } else {
        console.log(-1)
    }
}