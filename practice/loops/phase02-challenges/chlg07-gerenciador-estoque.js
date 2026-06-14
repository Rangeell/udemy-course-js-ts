/*
O Enunciado
    Você recebeu um único objeto que representa o estoque central de uma loja de departamentos. Cada chave desse objeto é uma categoria de produtos, e dentro de cada categoria existe um array com os preços dos produtos em estoque.

    Sua missão é criar uma função chamada calcularValorTotalEstoque(estoque) que descubra o valor total de todas as mercadorias somadas, não importa a categoria.

Regras da função:
    - Valide se estoque é um Objeto válido (use aquela validação para garantir que não seja null, array, etc.). Se for inválido, lance um erro.
    - Use o for...in para varrer as categorias (chaves) do objeto estoque.
    - Para cada categoria encontrada, acesse o array de preços e use o forEach para somar os valores no seu acumulador global.
    - Retorno: Retorne o valor total somado (número).

Exemplo de Entrada:
    const estoqueLoja = {
        eletronicos: [1200, 3500, 250], // array de preços
        livros: [45, 80, 120, 30],
        vestuario: [89, 120]
    };

Saída Esperada:
    Se rodar calcularValorTotalEstoque(estoqueLoja), o resultado deve ser 5514 (resultado da soma de absolutamente todos os números de todos os arrays).
*/

const estoqueLoja = {
    eletronicos: [1200, 3500, 250], // array de preços
    livros: [45, 'oi', null, 30],
    vestuario: [89, 120]
};

function calcularValorTotalEstoque(estoqueLoja) {
    if (typeof estoqueLoja !== 'object' || Array.isArray(estoqueLoja) || estoqueLoja === null) throw new TypeError('O valor informado precisa ser um Objeto válido!')
    if (Object.keys(estoqueLoja).length === 0) throw new Error('O objeto de estoque não pode estar vazio!')

    let total = 0
    for (let k in estoqueLoja) {
        estoqueLoja[k].forEach(v => {
            if (typeof v === 'number') {
                total += v
            }
        });
    }
    return total
}
console.log(calcularValorTotalEstoque(estoqueLoja))
console.log(Object.values(estoqueLoja))
console.log(Object.keys(estoqueLoja))
console.log(Object.entries(estoqueLoja))