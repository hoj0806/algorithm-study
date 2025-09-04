const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [al, ql] = input[0].split(" ").map(Number)
let arr = input[1].split(" ").map(Number)

for(let i = 2; i < 2 + ql; i++) {
    let [c, a, b] = input[i].split(" ").map(Number)

    if(c === 1) {
        console.log(arr[a - 1])
    } else if(c === 2) {
        if(arr.indexOf(a) === -1) {
            console.log(0)
        } else {
            console.log(arr.indexOf(a) + 1)
        }
    } else {
        console.log(arr.slice(a - 1, b).join(" "))
    }
}