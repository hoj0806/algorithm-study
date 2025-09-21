const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const commands = input.slice(1, 1 + n).map(line => line.split(' '));

// Please Write your code here.

let set = new Set()

for(let i = 0; i < commands.length; i++) {
    let [c, n] = commands[i]
  
    if(c === 'add') {
        set.add(n)
    } else if(c === 'remove') {
        set.delete(n)
    } else if(c === 'find') {
        console.log(set.has(n))
    }
}