const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = ''


for(let i = 1; i<=n; i++) {
    if(i % 2 === 0 || i % 3 === 0) {
        answer += '1 '
    } else {
        answer += '0 '
    }
}

console.log(answer)