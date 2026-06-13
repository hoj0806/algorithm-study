const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.


let sortArr2 = arr2.sort((a, b) => a - b).join("")
let cnt = 0

for (let i = 0; i < n - m + 1; i++) {
  let arr3 = []
  for (let j = i; j < i + m; j++) {
    arr3.push(arr1[j])
  }
  if (arr3.sort((a, b) => a - b).join("") === sortArr2) cnt++
}

console.log(cnt)