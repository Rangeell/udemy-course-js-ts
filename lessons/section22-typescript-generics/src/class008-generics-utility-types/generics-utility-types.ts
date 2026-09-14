/*
Os Utility Types são tipos nativos do TypeScript. Eles funcionam como tipos genéricos pré-construídos para transformar e manipular tipos existentes de forma dinâmica.

São eles:
  *- Ferramentas de Transformação de Estrutura
    1.Record<K, V>
    2. Required<T>
    3. Partial<T>
    4. Readonly<T>
    5.Pick<T, K>

  *- Lógica de Conjuntos
    1. Exclude<T, U>
    2. Extract<T, U>
*/

/*
*Record
  - Representa um objeto, onde informamos os tipos das chaves do objeto e os tipos dos valores respectivamente
*/
const obj1: Record<string, string | number> = {
  name: 'Breno',
  surname: 'Rangel',
  age: 23,
};
console.log(obj1);

/*
*Required
  - Transforma propriedades OPCIONAIS em OBRIGATÓRIAS
*/
type PeapleProtocol = {
  name?: string; // Opcional
  surname?: string; // Opcional
  age?: number; // Opcional
}

// Torna as propriedades, antes opcionais, em obrigatórias
type PeapleRequired = Required<PeapleProtocol>

const obj2: PeapleRequired = { // Se não seguir pelo menos as 3 chaves do contrato -> Run time ERROR
  name: 'Breno',
  surname: 'Rangel',
  age: 23,
};
console.log(obj2);

/*
*Partial
  - Transforma propriedades OBRIGATÓRIAS em OPCIONAIS
*/

type PeaplePartial = Partial<PeapleProtocol>

const obj3: PeaplePartial = { // Pode ter as chaves do contrato ou não
  name: 'Breno',
  // surname: 'Rangel',
  // age: 23,
};
console.log(obj3);

/*
*Readonly
  - Transforma propriedades em readonly (não podem ser modificadas)
*/
type PeapleReadonly = Readonly<PeapleRequired>

/*
*Pick
  - Permite a seleção cirúrgica de propriedades para criar um subconjunto de um tipo maior.
*/
type PeaplePick = Pick<PeapleRequired, 'name' | 'surname'> // Seleciona apenas as chaves "name" e "surname"

/*
*Exclude & Extract
  - Exclude: Extrai de `T` tudo o que NÃO é atribuível a `U`.
  - Extract: Extrai de `T` apenas o que É atribuível a `U` (intersecção).

  Recebemos os valores do primeiro argumento (`T`) e usamos o segundo argumento (`U`) para comparação
*/
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExcludeType = Exclude<ABC, CDE>; // 'A' | 'B' -> Apenas esses 2 não estão em CDE
type ExtractType = Extract<ABC, CDE>; // 'C' -> Apenas o que há de comum entre os conjuntos

//* ESTUDO DE CASO

// Simula uma conta que vem do MongoDB
type AccountMongo = { // Type Alias para as contas provenientes do MongoDB
  _id: string; // Eventualmente, vamos querer mudar para "id"
  name: string;
  surname: string
  age: number;
}
// Queremos mapear a conta anterior e remover o "_id"

// Type Alias para a contada API -> Gerada automaticamente com base no type alias "AccountMongo"
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & { id: string }

const accountMongo: AccountMongo = { // Supunha que essa conta venha da BD do Mongo
  _id: 'aqdwefwefwefwefwefw',
  name: 'Breno',
  surname: 'Rangel',
  age: 23,
};

/*
Função que faz o mapeamento dos tipos
  - Recebe uma conta do tipo "AccountMongo"
  - Retorna uma conta do tipo "AccountApi"
*/
function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;

  return { id: _id, ...accountData };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);
