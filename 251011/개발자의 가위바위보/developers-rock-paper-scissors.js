const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(" ").map(Number));

// Please Write your code here.

let x1 = []
let x2 = []
let x3 = []

let y1 = []
let y2 = []
let y3 = []

for(let i = 0; i < arr.length; i++) {
    let [x, y] = arr[i]
    if(x === 1) {
        x1.push(x)
    } else if(x === 2) {
        x2.push(x)
    } else if(x === 3) {
        x3.push(x)
    }

 if(y === 1) {
        y1.push(y)
    } else if(y === 2) {
        y2.push(y)
    } else if(y === 3) {
        y3.push(y)
    }

}