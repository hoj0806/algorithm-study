const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n")


let k = input[1].split(" ").map(Number)

let arr = Array(9).fill(0)

for(let i = 0; i < k.length; i++) {
    arr[k[i] - 1]+=1
}

console.log(arr.join('\n'))