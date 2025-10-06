const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);
// Please Write your code here.

let answer = Infinity

for(let i = 0; i < arr.length; i++) {
    let copy = arr.slice()
    copy[i]*=2
    for(j = 0; j < copy.length; j++) {
        let sum = 0
        let copy2 = copy.slice()
        copy2.splice(j, 1)
        for(let k = 0; k < copy2.length - 1; k++) {
            sum += Math.abs(copy2[k] - copy2[k+1])
        }
        answer = Math.min(answer, sum )
    }    
}
console.log(answer)