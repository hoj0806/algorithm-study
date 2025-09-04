const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let str = ''

for(let i = 0; i < input.length; i++) {
    let s = input[i]
    if((s >= 'a' && s <= 'z') || (s >= 'A' && s <= 'Z')) {
        str+=s
    }
}

console.log(str.toUpperCase())