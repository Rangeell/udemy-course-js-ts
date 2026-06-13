// Função que encontra o maior número dentro de um array

function bigger(numbers) {
    const max = Math.max(...numbers)
    if (max === -Infinity) {
        return console.log('Não foi possível identificar.')
    }

    return console.log(max)
}

numbers = [2000, 300, 1900]

bigger(numbers)