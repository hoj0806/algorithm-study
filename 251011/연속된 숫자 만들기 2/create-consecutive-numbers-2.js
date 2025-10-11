const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

// Please Write your code here.


let x = Math.abs(arr[0] - arr[1])
let y = Math.abs(arr[0] - arr[2])
let z = Math.abs(arr[1] - arr[2])

if((x === 1 && y === 2) || (x === 2 && y === 1) | (x === 1 && y === 1)) {
    console.log(0)
} else if(x === 2 || z === 2) {
    console.log(1)
} else {
    console.log(2)
}