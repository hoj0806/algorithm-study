const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const candies = [];
let arr = Array(5000001).fill(0)

for (let i = 1; i <= n; i++) {
    const [cnt, x] = input[i].split(' ').map(Number);
    arr[x] += cnt
}
let max = 0
let windowSum = 0
let windowLen = ((k * 2) + 1)

for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i]
    if (i >= windowLen - 1) {
        max = Math.max(max, windowSum)
        windowSum -= arr[i - (windowLen - 1)]
    }
}

console.log(max)