const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let odd = []
let even = []


for(let i = 0; i < input.length; i++) {
    let ord = i + 1

    if(ord % 2 === 0) {
        even.push(input[i])
    } else {
        odd.push(input[i])
    }
}


let oddSum = odd.reduce((a, c) => a + c)
let evenSum = even.reduce((a, c) => a + c)

console.log(Math.abs(oddSum - evenSum))
