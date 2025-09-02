const fs = require('fs')
let input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let w = n**2

console.log(w)
if(n < 5) {
    console.log('tiny')
}