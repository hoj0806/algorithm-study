const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = ''

for(let i = 1; i <= n; i++) {
    if((i % 2 === 0) || (parseInt(i % 10) === 5) || (i % 3 === 0 && i % 9 !== 0)) {
        continue
    } else {
        answer += i + " "
    }
}

console.log(answer)