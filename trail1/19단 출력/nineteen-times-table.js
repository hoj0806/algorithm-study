
let str = ''
for (let i = 1; i <= 19; i++) {
    for (let j = 1; j <= 19; j++) {
        str += `${i} * ${j} = ${i * j} `

        if (j % 2 === 0 || j === 19) {
            str += "\n"
        } else {
            str += "/ "
        }
    }
}

console.log(str)