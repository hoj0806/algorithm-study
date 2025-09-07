const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [A, B] = input[0].split(" ").map(Number);

// Please Write your code here.

function isPrime(a, b) {
    let sum = 0
  
      for(let i = a; i <= b; i++) {
        let b = true
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                b = false
                break
            }
        }
        if(b) {
            sum+=i
        }
        
    }

    return sum
}

console.log(isPrime(A, B))