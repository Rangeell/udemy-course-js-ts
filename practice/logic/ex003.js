/*
Exercise 03: Invert Object

Objetivo:
    Escreva uma função chamada inverterObjeto que recebe um objeto e retorna um novo objeto onde as chaves viram valores e os valores viram chaves.

Regras / Requisitos:
    1. A função deve validar se o argumento é um objeto válido. Lembre-se de que em JavaScript, null e Arrays também retornam 'object' no typeof. Se não for um objeto válido, lance um TypeError.

    2. Os valores do objeto original serão sempre strings ou numbers.

    3. Se o objeto estiver vazio, retorne {}.
*/

const invertObject = function (obj) {
    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        throw new TypeError('O argumento para a função deve ser um objeto!')
    };
    if (Object.keys(obj).length === 0) return {};

    const newObject = Object.entries(obj).reduce((acc, v) => {
        acc[v[1]] = v[0];

        return acc;
    }, {});

    return newObject;
};

console.log(invertObject({}));

console.log(invertObject({ a: "primeiro", b: "segundo", c: "terceiro" }));
// Deve retornar: { primeiro: "a", segundo: "b", terceiro: "c" }

console.log(invertObject({ nome: "Carlos", idade: 28 }));
// Deve retornar: { Carlos: "nome", '28': "idade" }
