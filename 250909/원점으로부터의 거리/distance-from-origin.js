const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.

class Info {
    constructor(x, y, index) {
        this.x = x
        this.y = y
        this.index = index
    }
}

let arr = []

const points = input.slice(1).map(line => line.trim().split(' ').map(Number));

for(let i = 0; i < n; i++) {
    let [x, y] = points[i]
    arr.push(new Info(x, y, i + 1))
}

arr.sort((a, b) => {
    let al = Math.abs(a.x - 0) + Math.abs(a.y - 0)
    let bl = Math.abs(b.x - 0) + Math.abs(b.y - 0)
    if(al !== bl) return al - bl
    else return a.index - b.index
}).forEach((i) => {
    console.log(i.index)
})