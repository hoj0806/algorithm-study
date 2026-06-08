const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

// Please write your code here.

function solution() {
    for (let i = 0; i < queries.length; i++) {
        let sum = 0
        let [a, b] = queries[i]
        for (let i = a - 1; i <= b - 1; i++) {
            sum += A[i]
        }
        console.log(sum)
    }
}

solution()