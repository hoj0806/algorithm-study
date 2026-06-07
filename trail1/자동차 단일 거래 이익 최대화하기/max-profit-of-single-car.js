const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let arr = f[1].split(" ").map(Number)


let max = 0

for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] <= arr[j]) {
            if (arr[j] - arr[i] > max) {
                max = arr[j] - arr[i]
            }
        }
    }
}

console.log(max)