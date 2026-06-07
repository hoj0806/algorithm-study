const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let arr = f[1].split(" ").map(Number)
let max = arr[0]
let nextMax = Number.MIN_SAFE_INTEGER;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        if (max >= nextMax) {
            nextMax = max
        }
        max = arr[i]
    } else {
        if (arr[i] > nextMax) {
            nextMax = arr[i]
        }
    }
}

console.log(max, nextMax)