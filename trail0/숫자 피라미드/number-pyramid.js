const fs = require('fs')
let n = Number(fs.readFileSync(0).toString().trim())

for(let i = 1; i <= n; i++) {
    let arr = []
    for(let j = 1; j <= i; j++) {
        arr.push(i)
    }

    console.log(arr.join(" "))
}