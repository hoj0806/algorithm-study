const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const segments = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

// Please Write your code here.
let answer = 0

for(let i = 0; i < segments.length; i++) {
    for(let j = i + 1; j < segments.length; j++) {
        let [s1, e1] = segments[i]
        let [s2, e2] = segments[j]
        let arr = [[s1, e1], [s2, e2]]
        let table = Array(1000).fill(0)
        for(let k = 0; k < arr.length; k++) {
            let [start , end] = arr[k]
            for(let l = start + 1; l <= end; l++) {
               table[l]+=1
            }
        }
        answer = Math.max(answer, 
        table.filter((i) => i !== 0).length
        )
    }
}

console.log(answer)