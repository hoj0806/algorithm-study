const fs = require('fs')
const p = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = p

let result = ""

for(let i = b; i >= a; i--) {
    result += i + " "
}

console.log(result)