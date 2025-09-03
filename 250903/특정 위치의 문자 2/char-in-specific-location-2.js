const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(" ")


let arr = []


for(let i = 0; i < input.length; i++) {
    let ord = i + 1

    if(ord === 2 || ord === 5 || ord === 8) {
        arr.push(input[i])
    }
}

console.log(arr.join(" "))