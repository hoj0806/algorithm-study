const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [n, find] = input[0].split(" ").map(Number)
let arr = input[1].split(" ").map(Number)

let cnt = 0

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === find) {
        cnt++
    }
}

console.log(cnt)