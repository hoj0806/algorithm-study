const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = parseInt(input[0]);
const segments = [];

let answer = 'Yes'

let line = input[1]
for (let i = 2; i <= n; i++) {
    let s = input[i]

    let [a1, a2] = line.split(" ").map(Number)
    let [b1, b2] = s.split(" ").map(Number)

    if(a2 < b1 || b2 < a1) {
        answer = 'No'
        break
    } else {
        if(a1 < b1) {
            line = [b1, a2].join(" ")
        } else if(b1 < a1) {
            line = [a1, b2].join(" ")
        } else {
            line = [a1, a2].join(" ")
        }
    }
  
}

console.log(answer)
