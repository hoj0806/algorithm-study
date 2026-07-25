const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const aData = input.slice(1, n + 1).map(line => line.split(" ").map(Number));
const bData = input.slice(n + 1, n + 1 + m).map(line => line.split(" ").map(Number));

// Please Write your code here.


let arr = Array(3000000).fill(0)
let arr2 = Array(3000000).fill(0)
let len = arr.length

let aT = 0
let aP = 0
let bT = 0
let bP = 0

for (let i = 0; i < n; i++) {
    let [v, t] = aData[i]
    for (let j = 1; j <= t; j++) {
        aT += 1
        aP += v
        arr[aT] = aP
    }
}

for (let i = 0; i < m; i++) {
    let [v, t] = bData[i]
    for (let j = 1; j <= t; j++) {
        bT += 1
        bP += v
        arr2[bT] = bP
    }
}

let win = 'none'
let cnt = 0
for (let i = 0; i < len; i++) {
    if (arr[i] !== 0 && arr2[i] !== 0) {
        if (arr[i] > arr2[i]) {
            if (win === 'none' || win === 'B') {
                cnt++
                win = 'A'
            }
        } else if (arr2[i] > arr[i]) {
            if (win === 'none' || win === 'A') {
                cnt++
                win = 'B'
            }
        }
    }
}

console.log(cnt - 1)
