const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const values = input[0].trim().split(' ').map(Number);
// Please Write your code here.


let sortValues = values.sort((a, b) => a - b)

// A
let a = sortValues[0]

// A + B + C
let x = sortValues[sortValues.length - 1]

// B + C
let y = sortValues[sortValues.length - 2]

// A + C
let z = sortValues[sortValues.length - 3]

// C
let c = z - a

// B
let b = y - c

console.log(a, b, c)