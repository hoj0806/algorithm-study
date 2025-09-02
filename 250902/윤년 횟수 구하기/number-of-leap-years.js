const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let year = Number(input)

let cnt = 0

for(let i = 1; i <= year; i++) {
    if(i % 4 === 0) {
        if(!((i % 100 === 0) && (i % 400 !== 0))) {
            cnt++
        }
    }
}

console.log(cnt)