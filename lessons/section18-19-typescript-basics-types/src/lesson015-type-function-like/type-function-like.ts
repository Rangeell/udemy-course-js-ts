/*

*/


//* Forma equivocada e gambiarrada

function mapString(array: string[], callbackfn: CallableFunction): string[] { //! Precisamos usar CallableFunction
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackfn(array[i])); // Passa cada elemento do array recebido dentro da callbackfn
  }

  return newArray;
}


const abc = ['a', 'b', 'c'];

const abcMapped = mapString(abc, function (item: any) { //! Precisamos usar any
  return item.toUpperCase();
});

console.log(abc); // Array original não afetado
console.log(abcMapped);


//* Forma correta -> tipando a função de callback

type MapStringsCallback = (item: string) => string; //* Tipagaem da função de callback -> Type Alias

function mapString2(array: string[], callbackfn: MapStringsCallback): string[] { // Passando o Type Alias
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    newArray.push(callbackfn(item)); // Passa cada elemento do array recebido dentro da callbackfn
  }

  return newArray;
}


const abc2 = ['a', 'b', 'c'];

const abcMapped2 = mapString2(abc2, item => item.toUpperCase()); // Com a tipagem correta, ganhamos o autocomplete do VSCode

console.log(abc2); // Array original não afetado
console.log(abcMapped2);
