const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let arr = []


for (let i = 2; i <= n; i++) {
    let is = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            is = false
            break
        }
    }
    if (is === true) arr.push(i)
}

console.log(arr.join(" "))