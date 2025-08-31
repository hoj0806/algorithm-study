const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let a = Number(input[0])
let b = Number(input[1])

let answer = ''

while(true) {
    answer += `${a} `
    if(a > b) {
        break
    }

    if(a % 2 !== 0) {
        a*=2
    } else {
        a+=3
    }
}

console.log(answer)