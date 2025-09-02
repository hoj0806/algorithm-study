const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)


let s = 1

let answer = ''
while(s <= n) {
    if(s % 3 === 0) {
        answer += s + " "
    }
    s++
}

console.log(answer)