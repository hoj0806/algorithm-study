
const fs = require('fs')

let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)



let [a, b] = f
let arr = Array(b).fill(0)


while (true) {
    if (a <= 1) {
        break
    }
    let r = a % b
    arr[r] += 1
    a = parseInt(a / b)
}

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i] ** 2
}

console.log(sum)

