const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let n = Number(input[0])

let cnt = 0
for(let i = 1; i <= n; i++) {
    let score = input[i].split(" ").map(Number)

    let sum = score.reduce((a, c) => a + c)
    let average = (sum / score.length)
    
    if(average >= 60) {
        console.log('pass')
        cnt++
    } else {
        console.log('fail')
    }
}

console.log(cnt)