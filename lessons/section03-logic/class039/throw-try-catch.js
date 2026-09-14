function sum(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('x e y precisam ser número')
    }
    return n1 + n2
}

try {
    console.log(sum(1, 2))
    console.log(sum('1', 2))
} catch(err) {
    // console.log(err)
    console.log('Alguma coisa mais amigável para o nosso usuário.')
}
