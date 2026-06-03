const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [n, a] = f

let s = 1
while (s <= n) {
    if(s % a === 0) {
        console.log(1)
    } else {
        console.log(0)
    }
    s++
}