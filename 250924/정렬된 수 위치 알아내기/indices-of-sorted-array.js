const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
class Info {
    constructor(number, index) {
        this.number = number;
        this.index = index
    }
}

let list = []

for(let i = 0; i < n; i++) {
    list.push(new Info(arr[i], i + 1))
}

list.sort((a, b) => {
    if(a.number === b.number) {
        return a.index - b.index
    } else {
        return a.number - b.number
    }
}).map((a, i) => a.index = i + 1)


for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < list.length; j++) {
        if(arr[i] === list[j].number) {
            process.stdout.write(list[j].index + " ")
            list[j].number = true
            break
        }
    }
}

