const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let arr = []
let cnt = 0
let idx = 0
while (true) {
    if (f[idx] === "0") {
        break
    }

    if (idx % 2 === 0) {
        arr.push(f[idx])
    }
    idx++
    cnt++
}

console.log(cnt)
console.log(arr.join('\n'))