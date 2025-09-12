const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));


let arr = Array(11).fill("")

for(let i = 0; i < movements.length; i++) {
    let m = movements[i]
    let [n, r] = m
    arr[n]+= r
}
let answer = 0
let s = arr.filter((i) => i !== "" && i.length > 1)

for(let i = 0; i < s.length; i++) {
    let str = s[i]
    for(let j = 0; j < str.length - 1; j++) {
        if(str[j] !== str[j+1]) answer++
    }
}

console.log(answer)