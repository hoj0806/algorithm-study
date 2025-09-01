const fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split(" ")

let start = Number(input[0])
let end = Number(input[1])

let answer = 0
for(let i = start; i <= end; i++) {
    let count = 0

    for(let j = 1; j <= i; j++) {
        if(i % j === 0) {
            count+=1
        }
    }

    if(count === 3) {
        answer+=1
    }
}

console.log(answer)