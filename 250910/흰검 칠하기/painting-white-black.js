const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1).map(line => line.split(' '));

// Please Write your code here.

let arr = []

let hash = {
    
}

let idx = 0
for(let i = 0; i < commands.length; i++) {
  
    let [n, c] = commands[i]
    if(c === 'R') {
            for(let i = idx; i <= idx + Number(n) - 1; i++) {
                if(hash[i]) {
                    hash[i] = hash[i]+="B"
                } else {

                hash[i] = "B"
                }

            }
            idx+=Number(n) - 1
    } else {
        for(let i = idx; i >= idx - Number(n) + 1; i--) {
            if(hash[i]) {
                hash[i] = hash[i]+='W'
            } else {
            hash[i] = "W"
            }
                
        }
        idx = idx - Number(n) + 1
    }
}

let white = 0
let black = 0
let gray = 0

let value = Object.values(hash)


for(let i = 0; i < value.length; i++) {
    let str = value[i]
    if(str.length < 4) {
        if(str[str.length - 1] === "B") {
            black++
        } else {
            white++
        }
    } else {
        let b = 0
        let w = 0
 
        for(let j = 0;  j < str.length; j++) {
            if(str[j] === "B") {
                b++
            } else {
                w++
            }
        }
         if(b === 2 && w === 2) {
                gray++
            }
    }
}

console.log(white, black ,gray)