const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b] = f


if(a % 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}

if(b% 2 === 0) {
    console.log("even")
} else {
    console.log("odd")
}