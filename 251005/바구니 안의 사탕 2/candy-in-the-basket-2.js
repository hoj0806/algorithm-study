const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

let arr = Array(100).fill(0)

for (let i = 0; i < n; i++) {
    const [candy, position] = input[index++].split(" ").map(Number);
    arr[position]+=candy    
}

let max = -1

for(let i = k; i < arr.length - k; i++) {
    let s = arr.slice(i-k, i+k+1).reduce((a, c) => a + c, 0)
    max = Math.max(max, s)
}

console.log(max)