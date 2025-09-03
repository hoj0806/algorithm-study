const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])
let scores = input[1].split(" ").map(Number)

let sum = 0

for(let i = 0; i < n; i++) {
    sum+= scores[i]
}

let average = (sum / n).toFixed(1)

console.log(average)

if(average >= 4.0) {
    console.log('Perfect')
} else if(average >= 3.0) {
    console.log('Good')
} else {
    console.log("Poor")
}