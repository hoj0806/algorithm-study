const fs = require('fs')
let input =  fs.readFileSync(0).toString().trim()

let answer = ''
let number = Number(input)

for(let i = 0; i < 5; i++) {
    answer+= `${number} `
    number*=2
}

console.log(answer)