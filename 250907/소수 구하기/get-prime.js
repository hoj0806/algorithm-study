const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)

let answer = ''

for(let i = 2; i <= n; i++) {
    let isPrime = true

    for(let j = 2; j < i; j++) {
        if(i % j === 0) {
            isPrime = false
            break
        }
    }
    if(isPrime) {
        answer+= i + " "
    }
}

console.log(answer)