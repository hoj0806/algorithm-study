const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [s, n] = f[0].split(" ")


for (let i = 1; i <= Number(n); i++) {
    let c = Number(f[i])
    if (c === 1) {
        s = s.slice(1) + s.slice(0, 1)
    } else if (c === 2) {
        s = s.slice(-1) + s.slice(0, -1)
    } else if (c === 3) {
        s = [...s].reverse().join("")
    }

    console.log(s)
}