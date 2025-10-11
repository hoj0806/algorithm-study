const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const a = input[1].split(" ").map(Number);

// Please Write your code here.


let s = [...new Set(a.sort((a, b) => a - b))]

// s의 길이가 1일경우 불가능, s[1]의 필터링 개수가 1개보다 많을 경우

if(s.length === 1 || a.filter(i => i === s[1]).length > 1) {
    console.log(-1)
} else {
    console.log(a.indexOf(s[1]) + 1)
}