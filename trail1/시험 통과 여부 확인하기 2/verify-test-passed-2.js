const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(f[0])
let cnt = 0

for (let i = 1; i <= n; i++) {
    let sum = f[i].split(" ").map(Number).reduce((a, c) => a + c, 0)
    if((sum / 4) >= 60) {
        cnt++
        console.log("pass")
    } else {
        console.log("fail")
    }
}

console.log(cnt)