const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.

let answer = 10000
let sum = abilities.reduce((a, c) => a + c , 0)
for(let i = 0; i < abilities.length; i++) {
    for(let j = i + 1; j < abilities.length; j++) {
        for(let k = j + 1; k < abilities.length; k++) {

            let x = abilities[i] + abilities[j]
            let y = abilities[k]
            let z = sum - (x + y)
            if(x !== y && y !== z && x !== z) {
                let max = Math.max(x, y, z)
                let min = Math.min(x, y, z)
                answer = Math.min(answer, Math.abs(max - min))
            }
        }
    }
}

console.log(answer === 10000 ? -1 : answer)
