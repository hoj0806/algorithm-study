const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);

let k = input.slice(1).map(i => i.split(" ").map(Number))

let answer = 0
for(let i = 0; i <= 1000; i++) {
    let t = i
    let sum = 0
    for(let j = 0; j < k.length; j++) {
        let [s, e] = k[j]
        if(t < s) sum+=c
        else if(t >= s && t <= e) sum+=g
        else sum+=h
    }
    answer = Math.max(answer, sum)
}
console.log(answer)