const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let idx = 0
while (true) {
    let [a, b, c] = f[idx].split(" ")

    console.log(Number(a) * Number(b))


    if (c === "C") break

    idx++
}