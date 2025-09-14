const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.


let arr = []

for(let i = 0; i < commands.length; i++) {
    let arr = commands[i].split(" ")
    console.log(arr)
}