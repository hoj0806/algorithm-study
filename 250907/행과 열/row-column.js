const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

for(let i = 1; i <= a; i++) {
    let str = ''
    for(let j = 1; j <= b; j++) {
        str += i * j + " "
    }
    console.log(str)
}