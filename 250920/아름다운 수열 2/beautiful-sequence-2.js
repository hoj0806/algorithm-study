const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

// Please write your code here.

let cnt = 0

for(let i = 0; i <arr1.length - m + 1; i++) {
    let slice = arr1.slice(i, i + m)
    if(arr2.sort().join("") === slice.sort().join("")) cnt+=1
}

console.log(cnt)