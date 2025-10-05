const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, h, t] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
let min = Infinity
for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j <= arr.length; j++) {
        let sum = 0
        let s = arr.slice(i, j)
        if(s.length >= t) {
            s.forEach(i => {
                sum += Math.abs(h - i)
            })
           min = Math.min(min, sum)
        }
    }
}
console.log(min)