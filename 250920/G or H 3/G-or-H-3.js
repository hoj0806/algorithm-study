const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const people = [];
for (let i = 1; i <= n; i++) {
  const [x, c] = input[i].split(' ');
  people[Number(x) - 1] = c
}

if(k > people.length) {
  let sum = 0
  for(let i = 0; i < people.length; i++) {
    if(people[i] === 'G') {
      sum+=1
    } else if(people[i] === 'H') {
      sum+=2
    }
  }
  console.log(sum)
} else {
    let max = 0
    for(let i = 0; i < people.length - k; i++) {
   let slice = people.slice(i, i + k + 1);
   let sum = 0
   for(let j = 0; j < slice.length; j++) {
      if(slice[j] === 'G') {
        sum+=1
      } else if(slice[j] === 'H') {
        sum+=2
      }
   }
   max = Math.max(max, sum)
}

console.log(max)

}
