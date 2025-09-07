const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)
let str = ''

for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= n; j++) {
        if((i + j) % 4 === 0) {
            str += `(${i}, ${j})\n`
        } else {
            str += `(${i}, ${j}) `
        }
    }
}

console.log(str)