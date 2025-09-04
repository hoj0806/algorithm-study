const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [str, n] = input[0].split(" ")

for(let i = 1; i <= Number(n); i++) {
    let command = input[i]

    if(command === "1") {
        str = str.slice(1) + str.slice(0, 1)
    } else if(command === "2") {
        str = str.slice(-1) + str.slice(0, -1)
    } else {
        let arr = str.split("").reverse()
        str = arr.join("").slice()
    }

    console.log(str)
}