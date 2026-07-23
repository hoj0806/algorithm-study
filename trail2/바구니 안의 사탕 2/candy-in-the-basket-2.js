const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let index = 0;
const [n, k] = input[index++].split(" ").map(Number);

let arr = Array(1000).fill(0)

for (let i = 0; i < n; i++) {
  const [candy, position] = input[index++].split(" ").map(Number);
  arr[position - 1] += candy
}

let max = 0
let basketLength = (k * 2) + 1

for (let i = 0; i < arr.length - basketLength; i++) {
  let slice = arr.slice(i, basketLength + i)
  let sum = slice.reduce((a, c) => a + c, 0)
  max = Math.max(max, sum)
}

console.log(max)

