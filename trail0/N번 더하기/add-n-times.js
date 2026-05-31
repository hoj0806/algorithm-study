const fs = require('fs')
let p = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = p

for(let i = 0; i < b; i++) {
    console.log(a += b)
}