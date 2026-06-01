try {
    // console.log(a)
    console.log('Abri um arquivo.')
    console.log('Manipulei o arquivo e gerou erro.')
    console.log('Fechei o arquivo.')

    try {
        console.log(b)
    } catch(err) {
        console.log('Deu Erro.')
    } finally {
        console.log('Também sou finally.')
    }

} catch (err) {
    console.log('Tratando o erro.')
} finally {
    console.log('FINALLY: Eu sempre sou executado.')
}