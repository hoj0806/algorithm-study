const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = input

let satisfied = false


for(let i = a; i <= b; i++) {
    if(1920 % i === 0 && 2880 % i === 0) {
        satisfied = true
        break
    }
}

if(satisfied) {
    console.log(1)
} else {
    console.log(0)
}