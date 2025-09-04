const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let answer = ''

for(let i = 0; i < input.length; i++) {
    let s = input[i]

    if(s >= 'a' && s <= 'z') {
        answer+= s.toUpperCase()
    } else {
        answer+= s.toLowerCase()
    }
}

console.log(answer)