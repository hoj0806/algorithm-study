const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let arr = []
for(let i = 0; i < input.length; i++) {
    let n = input[i]
    if(n >= 250) {
        break
    } else {
        arr.push(n)
    }
}

let sum = arr.reduce((a, b) => a + b)
let average = sum / (arr.length).toFixed(1)

console.log(sum , average)