const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let [a, b] = f


for (let i = 0; i < a.length; i++) {
    if (a.slice(i, i + b.length) === b) {
        console.log(i)
        return
    }
}

console.log(-1)