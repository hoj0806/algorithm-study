const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = ''

for(let i = 1; i <= n; i++) {
    if((i % 3 === 0) || 
    (String(i).indexOf("3") !== -1 || 
    String(i).indexOf("6") !== -1 || 
    String(i).indexOf("9") !== -1 
    )) {
        answer += '0 '
    } else {
        answer += i + " "
    }
}

console.log(answer)