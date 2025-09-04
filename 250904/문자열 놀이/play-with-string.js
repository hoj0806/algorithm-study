const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

let [str, number] = input[0].split(" ")
let arr = str.split("")

for(let i = 1; i <= Number(number); i++) {
    let [command, a, b] = input[i].split(" ")

    if(command === "1") {
        arr[Number(a) - 1] = str[Number(b) - 1]
        arr[Number(b) - 1] = str[Number(a) - 1]
        console.log(arr.join(""))
    } else if(command === "2") {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === a) {
                arr[i] = b
            }
        }
        console.log(arr.join(""))
    }
   
}