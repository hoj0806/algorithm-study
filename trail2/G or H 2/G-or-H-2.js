const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input.shift());
let arr = Array(110).fill(0)

for (let i = 0; i < n; i++) {
  const [posStr, letter] = input[i].split(' ');
  const pos = Number(posStr);
  arr[pos] = letter
}

let max = 0

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length + 1; j++) {



    if (arr[i] !== 0 && arr[j - 1] !== 0) {
      let slice = arr.slice(i, j)
      let gCount = 0
      let hCount = 0

      for (let i = 0; i < slice.length; i++) {
        if (slice[i] === 'G') gCount++
        else if (slice[i] === 'H') hCount++
      }

      if (
        (gCount > 0 && hCount === 0) ||
        (hCount > 0 && gCount === 0) ||
        (gCount !== 0 && hCount !== 0 && (gCount === hCount))
      ) {
        if (arr[i] !== 0 && arr[j - 1] !== 0) {
          max = Math.max(max, j - i - 1)
        }
      }
    }
  }
}

console.log(max)