const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split("\n").map(Number)

let t = 0
let s = 0
for (let i = 0; i < f.length; i++) {
    if (f[i] % 3 === 0) {
        t++
    }

    if (f[i] % 5 === 0) {
        s++
    }

}

console.log(t, s)