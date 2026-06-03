const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, n] = f

for(let i = 1; i <= n; i++) {
    a+=n
    console.log(a)
}