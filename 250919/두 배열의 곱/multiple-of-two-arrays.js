const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let arr = input.slice(0, 3).map((i) => i.split(" ").map(Number))
let arr2 = input.slice(4, 8).map((i) => i.split(" ").map(Number))

arr.forEach((n , i) => {
    let [a, b, c] = n
    let [x, y, z] = arr2[i]
    console.log([a*x, b*y, c*z].join(" "))
})