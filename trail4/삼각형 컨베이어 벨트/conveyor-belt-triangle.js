const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, t] = input[0].split(' ').map(Number);
const l = input[1].trim().split(' ').map(Number);
const r = input[2].trim().split(' ').map(Number);
const d = input[3].trim().split(' ').map(Number);

// Please Write your code here.


for (let i = 1; i <= t; i++) {
  let lEnd = l[n - 1]
  let rEnd = r[n - 1]
  let dEnd = d[n - 1]

  for (let j = n - 1; j >= 1; j--) {
    l[j] = l[j - 1]
    r[j] = r[j - 1]
    d[j] = d[j - 1]

  }
  l[0] = dEnd
  r[0] = lEnd
  d[0] = rEnd
}

console.log(l.join(" "))
console.log(r.join(" "))
console.log(d.join(" "))
