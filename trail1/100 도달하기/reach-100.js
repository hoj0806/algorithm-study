const fs = require('fs')
let f = fs.readFileSync(0).toString().trim()

let n = Number(f)

let arr = [1, n]
while (true) {
    let nextValue = arr[arr.length - 1] + arr[arr.length - 2]
    arr.push(nextValue)

    if (nextValue > 100) {
        console.log(arr.join(" "))
        return
    }
}