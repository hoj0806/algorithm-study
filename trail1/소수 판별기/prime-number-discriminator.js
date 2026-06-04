const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)


for(let i = 2; i < n; i++) {
    if(n % i === 0) {
        console.log("C")
        return
    }
}

console.log('P')