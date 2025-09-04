const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let maxValue = 0

for(let i = 0; i < input.length; i++) {
    if(input[i] > maxValue) {
        maxValue = input[i]
    }
}

console.log(maxValue)