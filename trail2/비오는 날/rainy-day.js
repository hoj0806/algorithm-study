const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map(line => line.split(' '));

// Please Write your code here.


class W {
    constructor(date, day, weather) {
        this.date = date
        this.day = day
        this.weather = weather
    }
}


let arr = []

for (let i = 0; i < forecasts.length; i++) {
    let [a, b, c] = forecasts[i]
    arr.push(new W(a, b, c))
}

let k = arr.filter((z) => z.weather === "Rain").sort((a, b) => {
    let [a1, a2, a3] = a.date.split("-").map(Number)
    let [b1, b2, b3] = b.date.split("-").map(Number)
    if (a1 !== b1) {
        return a1 - b1
    } else if (a2 !== b2) {
        return a2 - b2
    } else {
        return a3 - b3
    }
})

console.log(k[0].date, k[0].day, k[0].weather)