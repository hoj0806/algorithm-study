const fs = require('fs')
let f = fs.readFileSync(0).toString().trim().split(" ").map(Number)


let [a, b] = f


let str = (a+b).toString()


let cnt = 0
for(let ele of str) {
    if(ele === "1") cnt++
}

console.log(cnt)

