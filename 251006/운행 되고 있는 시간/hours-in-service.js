const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here

let arr = Array(1000).fill(0)

for(let i = 0; i < segments.length; i++) {
    let [s, e] = segments[i]
    for(let j = s + 1; j <= e; j++) {
        arr[j]+=1
    }
}


let answer = -1

for(let i = 0; i < segments.length; i++) {
    let [s, e] = segments[i]
    let z = arr.slice()
    for(let j = s + 1; j <=e ; j++) {
        z[j]-=1
    }
    answer = Math.max(answer, z.filter((i) => i!==0).length)
}

console.log(answer)