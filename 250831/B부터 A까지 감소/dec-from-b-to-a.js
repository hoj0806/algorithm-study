const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(input[0])
let b = Number(input[1])


let answer = ''
for(let i = b; i >= a; i-=1) {
    answer += `${i} `
}