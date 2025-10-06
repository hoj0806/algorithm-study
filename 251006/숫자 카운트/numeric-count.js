const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

// Please write your code here.
let answer = Array(1000).fill(0)
for(m = 0; m < arr.length; m++) {
    let [z, c1, c2] = arr[m]
    z = String(z)
    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= 9; j++) {
            for(let k = 1; k <= 9; k++) {
                if(i !== j && j !== k && i !== k) {
                    let p1 = 0
                    let p2 = 0
                    let str = '' + i + j + k
                    for(let u = 0; u < str.length; u++) {
                        if(str[u] === z[u]) {
                            p1++
                        } else {
                            if(str.indexOf(z[u]) !== -1) p2++
                        }
                    }
                    if(c1 === p1 && c2 === p2) {
                        if(answer[Number(str)] !== -1) {
                            answer[Number(str)] = str
                        }
                      
                    } else {
                        answer[Number(str)] = -1
                    }
                }
        
            }
        }
    }
}

console.log(answer.filter(i => i !== 0 && i !== -1).length)