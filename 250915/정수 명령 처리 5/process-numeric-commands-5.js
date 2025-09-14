const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

// Please Write your code here.




let arr = []
for(let i = 0; i < commands.length; i++) {

    let c = commands[i].split(" ")
    if(c[0] === 'push_back') {
        arr.push(Number(c[1]))
    } else if(c[0] === 'pop_back') {
        arr.pop()
    } else if(c[0] === 'size') {
        console.log(arr.length)
    } else if(c[0] === 'get') {
        console.log(arr[Number(c[1]) - 1])
    }
}