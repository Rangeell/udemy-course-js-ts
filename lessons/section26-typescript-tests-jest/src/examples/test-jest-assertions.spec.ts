/*
Nesta aula são apresentadas as principais asserções (matchers) do Jest para validação de valores primitivos e objetos, além de configurações úteis para a execução do terminal em modo watch e silent.
*/

describe('Primitive Values', () => {
  it('should test jest assertions', () => {
    const num = 10;

    // Checa igualdade com `Object.is()` -> Falha ao comparar 2 objetos diferentes que tenham o mesmo conteúdo, pois a referência de memória é sempre distinta
    expect(num).toBe(10);

    // Realiza uma verificação recursiva (Deep Equality) -> Ideal para comparações entre objetos
    expect(num).toEqual(10);

    // Null & Boolean
    expect(num).toBeTruthy();
    expect(null).toBeNull();
    expect(null).toBeFalsy();

    // Denial
    expect(num).not.toBeFalsy();

    // Numbers
    expect(num).toBeLessThan(11);
    expect(num).toBeGreaterThan(9);
    expect(num).toBeLessThanOrEqual(10);
    expect(num).toBeGreaterThanOrEqual(9);

    // Checagens de valores aproximados e de ponto flutuante
    expect(num).toBeCloseTo(10.001);
    expect(num).toBeCloseTo(9.996);

    // Verifica existência de propriedade
    expect(num).toHaveProperty('toString'); // Number.toString()
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    // Objetos iguais, mas apontam para locais diferentes da memória
    const person = { name: 'Breno', age: 23 };
    const anotherPerson = { ...person };

    // Checam de igualdade (Referência de memória VS. Deep Equality)
    expect(person).toEqual(anotherPerson); // Apesar de serem diferentes, são iguais do ponto de vista estrutural
    // expect(person).toBe(anotherPerson); //! FALHA -> Objetos diferentes

    // Verificação de propriedades (pode ser checado com `.not`)
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 23);
    expect(person).not.toHaveProperty('lastName');

    // Verifica valores de propriedades do objeto
    expect(person.name).toBe('Breno');
  });
});
