const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let [s, n] = f[0].split(" ")

for (let i = 1; i <= Number(n); i++) {
    let [a, b, c] = f[i].split(" ")
    if (a === "1") {
        let k = s.split("")
        let temp = k[Number(c - 1)]
        k[Number(c - 1)] = k[Number(b - 1)]
        k[Number(b - 1)] = temp
        s = k.join("")
    } else if (a === "2") {
        s = s.replaceAll(b, c)
    }

    console.log(s)
}