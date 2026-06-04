const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')


let arr = f[1].split(" ").map(Number)

let r = []
for (let ele of arr) {
    if (ele % 2 === 0) r.push(ele)
}


console.log(r.reverse().join(" "))
