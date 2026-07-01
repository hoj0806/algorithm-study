const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

// Please Write your code here.


let map = new Map()


for (let i = 1; i <= n; i++) {
    let [c, a, b] = input[i].split(" ")
    if (c === 'add') {
        map.set(a, b)
    } else if (c === 'remove') {
        map.delete(a)
    } else {
        if (map.has(a)) {
            console.log(map.get(a))
        } else {
            console.log("None")
        }
    }
}

