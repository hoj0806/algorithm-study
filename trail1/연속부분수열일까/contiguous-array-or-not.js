const fs = require('fs')
let input = fs.readFileSync(0).toString().split('\n')


let [m, n] = input[0].split(" ").map(Number)
let arr1 = input[1].split(" ").map(Number)
let arr2 = input[2].split(" ").map(Number).join("")


let isSequence = false

for (let i = 0; i <= m - n; i++) {
    let slice = arr1.slice(i, i + n).join("")
    if (slice === arr2) {
        isSequence = true
        break
    }
}

console.log(isSequence ? "Yes" : "No")
