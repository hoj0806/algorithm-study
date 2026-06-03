const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [a1, a2] = f[0].split(" ")
let [b1, b2] = f[1].split(" ")

if ((Number(a1) >= 19 && a2 === "M") || (Number(b1) >= 19 && b2 === "M")) {
    console.log(1)
} else {
    console.log(0)
}