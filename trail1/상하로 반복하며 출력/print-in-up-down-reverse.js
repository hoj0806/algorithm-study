const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let odd = 1
let even = n

for (let i = 1; i <= n; i++) {
    let str = ''

    for (let j = 1; j <= n; j++) {
        if (j % 2 !== 0) {
            str += odd
        } else {
            str += even
        }
    }
    odd++
    even--
    console.log(str)
}
