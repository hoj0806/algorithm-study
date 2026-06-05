const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)
let arr = [n]

let cnt = 0
let idx = 1

while (true) {
    if (cnt === 2) break

    if (arr[arr.length - 1] % 5 === 0) cnt++

    idx++
    n = arr[0] * idx
    arr.push(n)

}

arr.pop()

console.log(arr.join(" "))