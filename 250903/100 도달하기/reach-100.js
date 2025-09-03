const fs = require('fs')
const input = fs.readFileSync(0).toString().trim()


let n = Number(input)

let arr = [1, n]

let idx = 2

while(true) {
    arr[idx] = arr[idx - 1] + arr[idx - 2]


    if(arr[idx] > 100) {
        break
    }

    idx++
}

console.log(arr.join(" "))