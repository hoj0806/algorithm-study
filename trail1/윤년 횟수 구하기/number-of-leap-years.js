const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let cnt = 0

for (let i = 1; i <= Number(f); i++) {
    if (i % 4 === 0) {
        if (i % 100 === 0) {
            if (i % 400 === 0) cnt++
        } else {
            cnt++
        }
    }
}

console.log(cnt)