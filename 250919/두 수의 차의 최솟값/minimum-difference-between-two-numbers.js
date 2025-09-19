const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input[1].split(" ").map(Number)

let min = Number.MAX_SAFE_INTEGER

for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        let diff = Math.abs(arr[i] - arr[j])
        if(diff < min) {
            min = diff
        }
    }
}

console.log(min)