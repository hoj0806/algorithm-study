const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const SortedSet = require("collections/sorted-set");

const t = Number(input[0]);
let inputIndex = 1;

for (let i = 0; i < t; i++) {
    const k = Number(input[inputIndex]);
    inputIndex++;
    let s = new SortedSet()
    for (let j = 0; j < k; j++) {
        const [command, x] = input[inputIndex].split(" ");
        const n = Number(x);
        inputIndex++;
        // Please Write your code here.
        if(command === 'I') {
            s.push(n)
        } else if(command === 'D') {
            if(n === 1) {
                if(s.findGreatest()) {
                    s.delete(s.findGreatest().value)
                }
            } else if(n === -1) {
                if(s.findLeast()) {
                    s.delete(s.findLeast().value)
                }
            }
        }
    }

    if(s.findGreatest()) {
        console.log(s.max(), s.min())
    } else {
        console.log("EMPTY")
    }
}