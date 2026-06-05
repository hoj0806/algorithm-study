const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let n = Number(f[0])
let s = f[f.length - 1]
let cnt = 0
let sum = 0
for (let i = 1; i <= n; i++) {
    let str = f[i]
    if (str[0] === s) {
        cnt++
        sum += str.length
    }
}

console.log(cnt , (sum / cnt).toFixed(2))