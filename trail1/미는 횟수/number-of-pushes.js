const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let [a, b] = f

for (let i = 1; i < a.length; i++) {
    a = a.slice(-1) + a.slice(0, -1)
    
    if (a === b) {
        console.log(i)
        return
    }
}

console.log(-1)