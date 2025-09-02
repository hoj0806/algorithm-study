const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = ''
for(let i = 1; i <= n; i++) {
    if(
        (i % 2 === 0 && i % 4 !== 0) ||
        (parseInt(i / 8) % 2 === 0) ||
        (i % 7 < 4)
    ) {
        continue
    } 
    answer += i + " "
}

console.log(answer)