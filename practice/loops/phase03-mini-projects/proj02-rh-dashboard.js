/*
O Enunciado
    Você está criando o módulo de IA do sistema de RH de uma empresa. Você recebeu uma lista de funcionários (funcionarios) e um objeto contendo a tabela de bônus por departamento (tabelaBonus).

    Sua missão é criar uma função chamada gerarRelatorioFolha(funcionarios, tabelaBonus) que calcule o salário final de cada funcionário (Salário Base + Bônus do Departamento) e retorne um relatório estatístico.

As Malandragens do Cenário (Atenção!):
    1. Alguns salários base vieram como String no banco de dados (ex: "3000"). Você precisa garantir que eles virem números antes de somar.
    2. Se o departamento do funcionário não existir na tabelaBonus, o bônus dele deve ser 0.

Regras da função:
    1. Validação: Valide se os parâmetros de entrada são válidos (Array e Objeto).
    2. Varredura: Use o forEach para andar pela lista de funcionários.
    3. Lógica Dinâmica: Descubra o bônus do funcionário olhando o departamento dele dentro do objeto tabelaBonus (use o acesso dinâmico por colchetes [degraus] que aprendemos no exercício anterior, sem enfiar um monte de if manual).
    
    Acumuladores: Calcule o faturamento total da folha e descubra quem é o funcionário com o maior salário final do mês.

Exemplo de Entrada para Teste:
    const funcionarios = [
        { id: 1, nome: "Ana", departamento: "TI", salarioBase: 5000 },
        { id: 2, nome: "Carlos", departamento: "RH", salarioBase: "3000" }, // Atenção: String!
        { id: 3, nome: "Lucas", departamento: "Marketing", salarioBase: 4000 },
        { id: 4, nome: "Sandra", departamento: "Diretoria", salarioBase: 10000 } // Não tem na tabela de bônus!
    ];

    const tabelaBonus = {
        TI: 1000,
        RH: 500,
        Marketing: 800
    };

Retorno Esperado da Função:
    - O retorno deve ser um objeto com este formato exato:
        {
            custoTotalFolha: 24300, // Soma de (Salário + Bônus) de todo mundo
            funcionarioMaiorSalario: "Sandra" // Nome de quem recebeu o maior valor final
        }
*/

const funcionarios = [
    { id: 1, nome: "Ana", departamento: "TI", salarioBase: 5000 },
    { id: 2, nome: "Carlos", departamento: "RH", salarioBase: "3000" }, // Atenção: String!
    { id: 4, nome: "Sandra", departamento: "Diretoria", salarioBase: 10000 }, // Não tem na tabela de bônus!
    { id: 3, nome: "Lucas", departamento: "Marketing", salarioBase: 4000 },
];

const tabelaBonus = {
    TI: 1000,
    RH: 500,
    Marketing: 800
};

function gerarRelatorioFolha(funcionarios, tabelaBonus) {
    if (arguments.length < 2) throw new Error('Argumentos insufientes para a função!')
    if (!Array.isArray(funcionarios) || funcionarios.length === 0) throw new TypeError('O primeiro argumento precisa ser um array e não pode estar vazio!')
    if (typeof tabelaBonus !== 'object' || Object.keys(tabelaBonus).length === 0 || Array.isArray(tabelaBonus)) {
        throw new TypeError('O segundo argumento precisa ser um objeto e não pode estar vazio!')
    }


    let custo = 0
    let maiorSalario = 0
    let salarioAtt = 0
    let nomeMaiorSalario = ''

    funcionarios.forEach(v => {
        const bonus = tabelaBonus[v.departamento] || 0
        const salarioBase = Number(v.salarioBase)
        if (!salarioBase) return

        salarioAtt = salarioBase + bonus
        custo += salarioBase + bonus

        if (maiorSalario < salarioAtt) {
            maiorSalario = salarioAtt
            nomeMaiorSalario = v.nome
        }
    })
    return {
        custoTotalFolha: custo, // Soma de (Salário + Bônus) de todo mundo
        funcionarioMaiorSalario: nomeMaiorSalario // Nome de quem recebeu o maior valor final
    }
}
console.log(gerarRelatorioFolha(funcionarios, tabelaBonus))
