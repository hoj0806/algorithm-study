const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);


// Please Write your code here.

class Info {
    constructor(h, w, i) {
        this.h = h
        this.w = w
        this.i = i
    }
}

const studentInputs = [];
for (let i = 1; i <= n; i++) {
    const [height, weight] = input[i].split(' ').map(Number);
    studentInputs.push(new Info(height, weight, i));
}

studentInputs.sort((a, b) => {
    if(a.h !== b.h) return a.h - b.h
    else if(a.w !== b.w) return b.w - a.w
}).forEach((i) => {
    console.log(i.h, i.w, i.i)
})