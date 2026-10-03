/*
Para representar o contrato dos produtos do e-commerce, foi definida a interface `ProductProtocol`. Essa interface exige dois métodos fundamentais: `getPrice()`, que retorna um valor numérico (`number`), e `getName()`, que retorna uma cadeia de caracteres (`string`).
*/

export interface ProductProtocol {
  getPrice(): number;
  getName(): string;
}
