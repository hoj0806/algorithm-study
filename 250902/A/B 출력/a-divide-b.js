const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input



let answer = `${parseInt(a / b)}.`

b*=10
for(let i = 1; i <= 21; i++) {
    console.log(a / b)
}


