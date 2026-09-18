/*

*/
import { Messaging } from './messaging';

// Factory Function
const createSut = (): Messaging => new Messaging();

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); // Função que limpa os mocks depois de cada teste

  it('should return undefined', () => {
    const sut = createSut(); // Convenção Padrão (sut)

    // State Test
    expect(sut.sendMessage('Teste')).toBeUndefined(); // Verifica se o retorno é undefined (Smoke Test)
  });

  it('should call console.log once', () => {
    // Behavior Tests
    const sut = createSut(); // Classe alvo
    const consoleSpy = jest.spyOn(console, 'log'); // "Grampeando" o objeto `console` no método `log`
    sut.sendMessage('Teste'); // Chamando o método para ser verificado

    // Depois de observar o método, podemos chamar verificações de comportamentos
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  //! Teste falha (falso negativo) se não limparmos os mocks entre os testes com o hook `afterEach()`, pois o método acaba sendo chamado mais de uma vez
  it('should call console.log with "Mensagem enviada:" and msg', () => {
    // Behavior Tests
    const sut = createSut(); // Classe alvo
    const consoleSpy = jest.spyOn(console, 'log'); // "Grampeando" o objeto `console` no método `log`
    sut.sendMessage('Teste'); // Chamando o método para ser verificado

    // Depois de observar o método, podemos chamar verificações de comportamentos
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada: Teste');
  });
});
