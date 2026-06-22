const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.


let arr = []

for (let i = 0; i < commands.length; i++) {
    let [c, n] = commands[i].split(" ")
    n = Number(n)
    if (c === 'push_back') {
        arr.push(n)
    } else if (c === 'pop_back') {
        arr.pop()
    } else if (c === 'size') {
        console.log(arr.length)
    } else if (c === 'get') {
        console.log(arr[n - 1])
    }
}