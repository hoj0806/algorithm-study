const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let maxValue = -999
let minValue = 999

for(let i = 0; i < input.length; i++) {
    if(input[i] === 999 || input[i] === -999) {
        break
    }

    if(input[i] > maxValue) {
        maxValue = input[i]
    }
    
    if(input[i] < minValue) {
        minValue = input[i]
    }
}

console.log(maxValue, minValue)