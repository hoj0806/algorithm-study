const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f

let m = 0

if(a >= 90 && b >= 95) {
  m+= 100000
} else if(a >= 90 && b >= 90) {
    m+= 50000
}

console.log(m)