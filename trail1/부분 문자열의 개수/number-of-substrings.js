const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let [a, b] = f

let cnt = 0
for (let i = 0; i < a.length - b.length + 1; i++) {
    if (a[i] + a[i + 1] === b) cnt++
}

console.log(cnt)
