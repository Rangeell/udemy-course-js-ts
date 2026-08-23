/*
INTERFACES
  *- Declaration Merging;
    -> As interfaces com identificadores duplicados se unem, formando uma única interface com as propriedades individuais de cada declaração

  *- Atributos Opcionais;
    -> Propriedades que não são obrigatórias na interface (:? )

  *- O Modificador `readonly` em Propriedades e Arrays;
    -> Garante que o valor de uma propriedade não possa ser alterado após a criação do objeto

  *- Interfaces vs. Type Aliases: A Regra do Identificador Duplicado
    -> Interfaces permitem identificadores duplicados (Declaration Merging), enquanto Type Aliases não
*/
/*
! ERRO: Type não permite ter identificador duplicado
type Pessoa = {
  nome: string;
}
*/

//* DECLARATION MERGING
interface Pessoa {
  nome: string; // Faz com que o valor da propriedade não possa ser alterado
}

// Propriedade readonly
interface Pessoa { // Agora a interface 'Pessoa' contém ambas as propriedades
  readonly sobrenome: string;
}

// Propriede e array readonly
interface Pessoa {
  readonly enderecos: readonly string[]; // Faz com que tanto a propriedade quanto o array não possam ser alterados, protegendo contra alteçãoes via métodos como push, pop, etc.
}

// Propriedades opcionais e readonly -> pode existir ou não, mas se existir seu valor não pode ser alterado
interface Pessoa {
  readonly idade?: number; // Pode ser number ou undefined (inferido automaticamente)
}

const pessoa: Pessoa = {
  nome: 'Breno',
  sobrenome: 'Rangel',
  enderecos: ['Rua A', 'Rua B'],
  idade: 23,
};

console.log(pessoa);

//! ERRO: pessoa.idade = 24 (Não podemos alterar valores de  propriedades declaradas com readonly);
//! ERRO: pessoa.sobrenome = '' (Não podemos alterar valores de  propriedades declaradas com readonly);
//! ERRO: pessoa.enderecos.push('Rua C') (Não podemos alterar valores de arrays declarados com readonly);

//? OBS: A fragmentação das interfaces foi feita apenas para fins didáticos (exemplificar o mecanismo de Declaration Merging). Em produção, seria recomendado agrupar todas as propriedades em uma única interface.
