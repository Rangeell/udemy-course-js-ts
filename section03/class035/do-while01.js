// DIFFERENCE BETWEEN WHILE & DO WHILE - RANDOM NUMBER

function random(min, max) {
    const n = Math.random() * (max - min) + min
    return Math.round(n)
}

const min = 1
const max = 50
let rand = 10

console.log('while')
while (rand !== 10) {
    rand = random(min, max)
    console.log(rand)
}

console.log('do while')
do {
    rand = random(min, max)
    console.log(rand)
} while (rand !== 10)
