const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)

let [a, b] = f
let p = [parseInt(a / b)]
let arr = []


for (let i = 1; i <= 20; i++) {
    let k = (a % b)
    if (k < b) {
        k *= 10
    }
    a = k
    arr.push(parseInt(a / b))
}

console.log(`${p[0]}.${arr.join("")}`)