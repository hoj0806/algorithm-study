const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const abilities = input[0].split(" ").map(Number);

// Please Write your code here.

let answer = 10000
let sum = abilities.reduce((a, c) => a + c , 0)
for(let i = 0; i < abilities.length; i++) {
    for(let j = i + 1; j < abilities.length; j++) {
        for(let k = j + 1; k < abilities.length; k++) {
            let arr = [abilities[i] ,abilities[j] ,abilities[k]]
            let arrS = arr.reduce((a, c) => a + c, 0)
            for(let p = 0; p < arr.length; p++) {
                let p1 = arr[p]
                let p2 = arrS - p1
                let p3 = sum - (p1 + p2)
                if(p1 !== p2 && p2 !== p3 && p1 !== p3) {
                let max = Math.max(p1, p2, p3)
                let min = Math.min(p1, p2, p3)
                answer = Math.min(answer, Math.abs(max - min))
            }
            }
           
        }
    }
}

console.log(answer === 10000 ? -1 : answer)
