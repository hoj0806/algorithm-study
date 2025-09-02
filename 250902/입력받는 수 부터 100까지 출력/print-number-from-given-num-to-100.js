const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = NuMBER(input)

let answer = ''

for(let i = n; i <=100; i++) {
    answer += `${i} `
}

console.log(answer)