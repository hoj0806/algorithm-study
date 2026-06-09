const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const segments = [];


for (let i = 1; i <= n; i++) {
    segments.push(input[i].split(' ').map(Number));
}

// Please write your code here.
let arr = Array(201).fill(0)

for (let i = 0; i < segments.length; i++) {
    let [start, end] = segments[i]
    start+=100
    end+=100
    for(let j = start; j < end; j++) {
        arr[j]+=1
    }
}

console.log(Math.max(...arr))
