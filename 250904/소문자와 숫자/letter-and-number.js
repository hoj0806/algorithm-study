const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let answer = ''

for(let i = 0; i < input.length; i++) {
    let s = input[i]

    if((s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z')) {
        answer += s.toLowerCase()
    } else if(s >= '0' && s <= '9') {
        answer+= s
    }
}

console.log(answer)