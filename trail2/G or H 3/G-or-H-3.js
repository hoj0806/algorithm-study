const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);


// Please Write your code here.

let arr = Array(10000).fill(0)

for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  arr[Number(x) - 1] = c
}

let max = 0
for (let i = 0; i < arr.length -  k; i++) {
  let sum = 0
  for (let j = i; j < i +  k + 1; j++) {
    if (arr[j] === 'G') sum += 1
    else if (arr[j] === 'H') sum += 2
  }

  max = Math.max(max, sum)
}
console.log(max)

