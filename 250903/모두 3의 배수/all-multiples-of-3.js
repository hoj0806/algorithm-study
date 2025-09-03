const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let satisfied = false


for(let i = 0; i < input.length; i++) {
    let n = input[i]

    if(n % 3 !== 0) {
        satisfied = true
    }
}

if(satisfied) {
    console.log(0)
} else {
    console.log(1)
}