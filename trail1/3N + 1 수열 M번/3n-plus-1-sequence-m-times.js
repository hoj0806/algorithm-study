const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(f[0])


for (let i = 1; i <= n; i++) {
    let a = Number(f[i])

    let cnt = 0

    while (true) {
        if (a === 1) {
            console.log(cnt)
            break
        }
        if (a % 2 === 0) {
            a /= 2
        } else {
            a = (a * 3) + 1
        }
        cnt++
    }
}