const nome = 'Breno'
const sobrenome = 'Rangel'
export const idade = 23

export function soma(x = 0, y = 0) {
    return x + y
}


export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }
}

export default (x = 0, y = 0) => x * y // Exportando arrow function anônima
export { nome, sobrenome as sobrenome2 }
