const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[1].split(" ").map(Number)

let min = Number.MAX_SAFE_INTEGER

for(let i = 1; i < arr.length; i++) {
     let diff = Math.abs(arr[i] - arr[i - 1])
     if(diff < min) {
            min = diff
        }
}

console.log(min)