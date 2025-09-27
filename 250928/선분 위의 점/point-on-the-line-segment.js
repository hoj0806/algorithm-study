const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const points = input[1].split(' ').map(Number);
const queries = input.slice(2).map(line => line.split(' ').map(Number));

// Please Write your code here.

console.log(points)

for(let i = 0; i < queries.length; i++) {
    let arr = []
    let [start, end] = queries[i]
    for(let j = start; j <= end; j++) {
        arr.push(j)
    }
    console.log(arr)
}