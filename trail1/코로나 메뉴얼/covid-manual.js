const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split('\n')

let cnt = 0


for(let i = 0; i < f.length; i++) {
    let [a, b] = f[i].split(" ")
    if(Number(b) >= 37 && a === "Y") {
        cnt++
    }
}

console.log(cnt >= 2 ? "E" : "N")

