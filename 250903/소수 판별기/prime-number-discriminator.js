const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()

let n = Number(input)


let satisfied = false


for(let i = 2; i < n; i++) {
    if(n % i === 0) {
        satisfied = true
        break
    }
}

if(satisfied) {
    console.log('C')
} else {
    console.log('P')
}