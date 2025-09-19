const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = input

let max = Number.MIN_SAFE_INTEGER
let min = Number.MAX_SAFE_INTEGER

for(let i = 0; i < arr.length; i++) {
    let n = arr[i]

    if(n > 500 && n < min) {
        min = n
    }

    if(n < 500 && n > max) {
        max = n
    }
}

console.log(max, min)