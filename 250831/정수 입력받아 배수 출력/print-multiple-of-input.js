const fs = require('fs')
let input =  fs.readFileSync(0).toString().trim()

let answer = ''
let number = Number(input)

for(let i = number; i <= i * 5; i+=number) {
    answer += `${i} `
}

console.log(answer)