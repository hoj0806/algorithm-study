const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

let [a, o, c] = input[0].split(" ");
a = Number(a);
c = Number(c);
// Please Write your code here.

function solution(a, b, command) {
    if(command === "+") {
        return `${a} ${command} ${b} = ${a + b}`
    } else if(command === "-") {
        return `${a} ${command} ${b} = ${a - b}`
    } else if(command === "*") {
        return `${a} ${command} ${b} = ${a * b}`
    } else if(command === "/") {
        return `${a} ${command} ${b} = ${parseInt(a / b)}`
    } else {
        return 'False'
    }
}

console.log(solution(a, c, o))