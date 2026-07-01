function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, sou a promise!')
            resolve()
        }, 2000);
    })
}

export default async function () { // Exportando uma função anônima assìncrona
    await promise()
    console.log('Terminou')
}