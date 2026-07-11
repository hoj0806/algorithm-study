const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const SortedSet = require("collections/sorted-set");


const n = Number(input[0]);
const problemsArray = input.slice(1, 1 + n).map(line => line.split(" ").map(Number));
const m = Number(input[n + 1]);
const commands = input.slice(2 + n, 2 + n + m);

// Please Write your code here.

const s = new SortedSet();

for (let i = 0; i < n; i++) {
    s.push([problemsArray[i][1], problemsArray[i][0]])
}

for (let i = 0; i < m; i++) {
    let [c, a, b] = commands[i].split(" ")
    a = Number(a)
    b = Number(b)
    if (c === 'rc') {
        if (a === 1) {
            let idx = s.findGreatestLessThan([Infinity, Infinity])
            console.log(idx.value[1])
        } else if (a === -1) {
            let idx = s.findLeastGreaterThan([-Infinity, -Infinity])
            console.log(idx.value[1])
        }
    } else if (c === 'ad') {
        s.push([b, a])
    } else {
        s.delete([b, a])
    }
}
