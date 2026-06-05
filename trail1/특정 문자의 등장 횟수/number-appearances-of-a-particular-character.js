const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()


let a = 0
let b = 0

for (let i = 0; i < f.length - 1; i++) {
    if (f[i] === "e" && f[i + 1] === "e") {
        a++
    }

    if (f[i] === "e" && f[i + 1] === "b") {
        b++
    }
}

console.log(a, b)