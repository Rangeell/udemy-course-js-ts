import _ from 'lodash';

// Injetando um método customizado na biblioteca Lodash -> A atribuição real no Value Space
_.mult = function (array: number[]): number {
  return array.reduce((acc, value) => acc * value, 1);
};

// A atribuição real no Value Space
globalThis.MyGlobal = 'Valor armazenado no escopo global do Node';

export default _;
