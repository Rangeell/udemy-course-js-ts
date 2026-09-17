/*
Ao escrever suítes de testes, é uma prática recomendada e amplamente adotada pela comunidade a utilização da constante SUT.
  - Definição: SUT significa System Under Test (Sistema Sob Teste).

  - Propósito: Em arquivos de teste que possuem múltiplas dependências e objetos auxiliares, nomear a instância da classe principal como `sut` permite que o desenvolvedor identifique instantaneamente qual objeto é o alvo central da validação.

Smoke Test: Teste com objetivo pedagógico para validar se a execução do método completa seu ciclo sem lançar exceções.

Quando lidamos com objetos globais ou dependências que não foram injetadas, utilizamos o Spy. Um espião permite observar o comportamento de um método — como ele foi chamado, quantas vezes e com quais argumentos — sem necessariamente destruir sua implementação original.
*/

import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); // Função que limpa os mocks depois de cada teste

  it('should return undefined', () => {
    const sut = new Persistency(); // Convenção Padrão (sut)

    // State Test
    expect(sut.saveOrder()).toBeUndefined(); // Verifica se o retorno é undefined (Smoke Test)
  });

  it('should call console.log once', () => {
    // Behavior Tests
    const sut = new Persistency(); // Classe alvo
    const consoleSpy = jest.spyOn(console, 'log'); // "Grampeando" o objeto `console` no método `log`
    sut.saveOrder(); // Chamando o método para ser verificado

    // Depois de observar o método, podemos chamar verificações de comportamentos
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  //! Teste falha (falso negativo) se não limparmos os mocks entre os testes com o hook `afterEach()`, pois o método acaba sendo chamado mais de uma vez
  it('should call console.log with "Pedido salvo com sucesso!"', () => {
    // Behavior Tests
    const sut = new Persistency(); // Classe alvo
    const consoleSpy = jest.spyOn(console, 'log'); // "Grampeando" o objeto `console` no método `log`
    sut.saveOrder(); // Chamando o método para ser verificado

    // Depois de observar o método, podemos chamar verificações de comportamentos
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso!');
  });
});
