const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [str, number] = input[0].split(" ")
let arr = str.split("")

for(let i = 1; i <= Number(number); i++) {
    let [command, a, b] = input[i].split(" ")
    let strArr = str.split("")


    if(command === "1") {
        a = Number(a)
        b = Number(b)
        let x = str[a-1]
        let y = str[b-1]
        strArr[a-1] = y
        strArr[b-1] = x 
        str = strArr.join("")
    } else if(command === "2") {
        str = str.replaceAll(a, b)
    }
    console.log(str)
}