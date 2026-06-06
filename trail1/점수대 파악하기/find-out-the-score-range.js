const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let arr = Array(11).fill(0)

for (let i = 0; i < f.length; i++) {

    let score = f[i]
    if (score === 0) break
    if (score >= 10) {
        arr[Math.floor(score / 10)] += 1
    }
}

for (let i = arr.length - 1; i >= 1; i--) {
    console.log(`${10 * i} - ${arr[i]}`)
}


