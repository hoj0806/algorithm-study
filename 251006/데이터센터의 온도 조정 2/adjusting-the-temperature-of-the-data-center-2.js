const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, c, g, h] = input[0].split(' ').map(Number);

let k = input.slice(1).map(i => i.split(" ").map(Number))


let arr = []
for(let i = 0; i < k.length; i++) {
    let [s, e] = k[i]
    for(let j = s; j <= e; j++) {
        arr.push(j)
    }
}


let answer = 0
for(let i = 0; i < arr.length; i++) {
    let t = arr[i]
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