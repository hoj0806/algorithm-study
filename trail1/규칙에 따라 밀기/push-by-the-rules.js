const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let s = f[0]

for (let i = 0; i < f[1].length; i++) {
    let command = f[1][i]
    if (command === "L") {
        s = s.slice(1) + s.slice(0, 1)
    } else if (command = "R") {
        s = s.slice(-1) + s.slice(0, -1)

    }
}
    console.log(s)

