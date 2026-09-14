const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let v of numbers) {
    if (v === 3) {
        console.log(`Não gosto do número ${v}. Então, vou pular ele.`)
        continue
    }

    if (v === 7) {
        console.log(`Encontrei o número ${v}, que era o que eu estava procurando. Então, vou parar por aqui.`)
        break
    }
    console.log(`Contando: ${v}`)
}