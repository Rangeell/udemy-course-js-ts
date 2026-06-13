/*
O Enunciado
    Você recebeu uma lista de usuários de um sistema, mas alguns usuários estão com dados faltando (campos vazios). Você também recebeu um objeto contendo os "valores padrão" que devem ser usados caso o usuário não tenha aquela informação.

    Crie uma função chamada auditarUsuarios(listaUsuarios, valoresPadrao) que complete os dados que estão faltando em cada usuário.

    Regras da função:
        - Valide se listaUsuarios é um Array e se valoresPadrao é um Objeto genérico válido.
        - Use o forEach para passar por cada usuário da lista.
        - Dentro do forEach, use o for...in para varrer o objeto valoresPadrao.
        - Se o usuário atual não tiver aquela propriedade, ou se o valor dela for vazio/ausente (como null ou undefined), você deve atribuir o valor padrão a ele.
        - Retorno: Retorne a lista de usuários atualizada.

    Exemplo de Entrada:
        
    const usuarios = [
        { nome: "Ana", perfil: "Admin" }, // falta o status
        { nome: "Carlos", status: "Inativo" } // falta o perfil
    ];
    const padrao = { perfil: "Usuario", status: "Ativo" };

    Saída Esperada após rodar a função:
        [
        { nome: "Ana", perfil: "Admin", status: "Ativo" },
        { nome: "Carlos", perfil: "Usuario", status: "Inativo" }
        ]
*/

function auditarUsuarios(listaUsuarios, valoresPadrao) {
    listaUsuarios.forEach(function (v) {
        // Varremos o objeto de valores padrão (perfil e status)
        for (let i in valoresPadrao) {

            // Se o usuário 'v' NÃO tiver a propriedade 'i' (perfil ou status)...
            if (v[i] === undefined || v[i] === null) {
                // ...o usuário 'v' recebe o valor padrão correspondente
                v[i] = valoresPadrao[i];
            }

        }
    });

    return listaUsuarios; // Devolve a lista atualizada
}

// Os dados de teste:
const usuarios = [
    { nome: "Ana", perfil: "Admin" },
    { nome: "Carlos", status: "Inativo" }
];

const padrao = { perfil: "Usuario", status: "Ativo" };

// Executa e mostra o resultado na tela
console.log(auditarUsuarios(usuarios, padrao));