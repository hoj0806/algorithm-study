const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let even = []
let three = []


for(let i = 0; i < input.length; i++) {
    let k = input[i]

    if((i + 1) % 2  === 0) {
        even.push(k)
    }

    if((i + 1) % 3 === 0) {
        three.push(k)
    }
}

let a = even.length === 0 ? 0 : even.reduce((a, b) => a + b)
let b = three.length === 0 ? 0 : (three.reduce((a, c) => a + c) / three.length).toFixed(1)

console.log(a, b)