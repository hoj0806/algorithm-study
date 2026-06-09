const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

// Please Write your code here.
class K {
    constructor(number, index) {
        this.number = number
        this.index = index
    }
}

let z = arr.map((el, i) => new K(el, i + 1)).sort((a, b) => {
    if (a.number !== b.number) {
        return a.number - b.number
    } else {
        return a.index - b.index
    }
})


let rank = Array(arr.length).fill(0)

for (let i = 0; i < z.length; i++) {
    rank[z[i].index] = i + 1
}

rank.slice(1).forEach((i) => process.stdout.write(i + " "))