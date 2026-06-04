const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b] = f

for(let i = a; i <= b; i++) {
    if(1920 % i === 0 && 2880 % i === 0) {
        console.log(1)
        return
    }
}

        console.log(0)
