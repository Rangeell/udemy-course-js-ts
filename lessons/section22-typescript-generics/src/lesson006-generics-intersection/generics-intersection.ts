//* Tipando o retorno de função com Generics + Intersection Types

// Imagine que queremos criar uma função para unir objetos

// Como usamos generics na chamada da função, os tipos serão infereridos quando ela for chamdda
function mergeObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 { // Retorno da função é a intersecção dos dois tipos genéricosx
  return { ...obj1, ...obj2 }; // Unindo dois objetos sem alterar os originais (respeita a imutabilidade)

  //? return Object.assign({}, obj1, obj1); -> também pode ser feito dessa forma
}

const obj1 = { key1: 'valor1' };
const obj2 = { key2: 'valor2' };
const merged = mergeObjects(obj1, obj2);

console.log(merged); // Novo objeto resultante da união de dois objetos
