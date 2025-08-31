const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(input[0])
let b = Number(input[1])

for(let i = 0; i <= b; i++) {
    a+=b
    console.log(a)
}
