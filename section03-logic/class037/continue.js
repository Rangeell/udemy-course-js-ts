const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let v of numbers) {
    if (v === 2 || v === 5) {
        console.log(`Não gosto do número ${v}. Então, vou pular ele.`)
        continue
    }
    console.log(`Contando: ${v}`)
}