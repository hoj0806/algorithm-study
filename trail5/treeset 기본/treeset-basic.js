const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const SortedSet = require("collections/sorted-set");


const n = Number(input[0]);
const commands = input.slice(1, 1 + n);

// Please Write your code here.

const s = new SortedSet();

for (let i = 0; i < n; i++) {
    let [c, num] = commands[i].split(" ")
    num = Number(num)
    if (c === 'add') {
        s.push(num)
    } else if (c === 'remove') {
        s.delete(num)
    } else if (c === 'find') {
        console.log(s.has(num))
    } else if (c === 'lower_bound') {
        let node = s.findLeastGreaterThanOrEqual(num)
        if (node === undefined) {
            console.log("None")
        } else {
            console.log(node.value)
        }
    } else if (c === 'upper_bound') {
        let node = s.findLeastGreaterThan(num)
        if (node === undefined) {
            console.log("None")
        } else {
            console.log(node.value)
        }
    } else if (c === 'largest') {
        let node = s.findGreatest()
        if (node === undefined) {
            console.log("None")
        } else {
            console.log(node.value)
        }
    } else if (c === 'smallest') {
        let node = s.findLeast()
        if (node === undefined) {
            console.log("None")
        } else {
            console.log(node.value)
        }
    }
}
