// Aplicando a mesma lógica utilizando diversos tipos de iterações

const a1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

console.log('forEach ⬇️')
let total01 = 0
a1.forEach(v => {
    total01 += v
})
console.log(total01)

console.log('for of ⬇️')
let total02 = 0
for (let v of a1) {
    total02 += v
}
console.log(total02)

console.log('for in ⬇️')
let total03 = 0
for (let i in a1) {
    total03 += a1[i]
}
console.log(total03)

console.log('for clássico ⬇️')
let total04 = 0
for (let i = 0; i < a1.length; i++) {
    total04 += a1[i]
}
console.log(total04)

console.log('reduce ⬇️')
const total05 = a1.reduce((ac, v) => ac += v)
console.log(total05)