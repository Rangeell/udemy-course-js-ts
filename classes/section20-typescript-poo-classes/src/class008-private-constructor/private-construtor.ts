/*
Quando temos apenas uma base de dados no nosso sistema, é normal que queiramos realizar apenas uma conexão com a mesma. Não faz sentido termos mais de uma conexão com a base de dados, sem contar que isso pode gerar transtornos (duas ou mais conexões rodando no mesmo sistema)

PADRÃO DE PROJETO SINGLETON - GoF:

  - Objetivo: quando chamarmos a classe, vamos querer que ela retorne a instância que já estamos conectados no sistema (já foi criada), ou que ela crie uma instância caso não haja nenhuma (não queremos que a classe crie mais de uma instância)

  - Para que isso seja possível, usamos o construtor privado! Dessa maneira, a classe não pode ser instanciada com `new NomeClasse()`

  - Métodos estáticos: usamos, pois permite que sejam usados sem precisar instanciar a classe
    - Usamos um método estático para retornar a instancia já existente ou criar uma instancia nova, caso ela não exista (Factory Method)

  - Para armazenar a instancia da classe criada, criamos um atributo estático que é inicializado no métod estático `getDataBase()`

*/

// Uma classe no nosso sistema que representa uma conexão com a base de dados. Pode possuir métodos que manipulem os dados e afins
export class DataBase {
  private static database: DataBase; // Atributo estático privado que armazena a Base de Dados instanciada

  private constructor( // Dadados da base
    private readonly host: string,
    private readonly user: string,
    private readonly password: string) {
  }

  //* FACTORY METHOD
  static getDataBase(host: string, user: string, password: string): DataBase {
    // Verificamos se o atributo estático privado já esxiste
    if (DataBase.database) {
      console.log('Retornando instância já criada!');
      return DataBase.database; // Se já existe, retornamos a instancia já existente

    }

    console.log('Criando nova instância!');
    DataBase.database = new DataBase(host, user, password); // Se não, cria uma instancia e retorna a mesma
    return DataBase.database;
  }

  connect(): void { // Método que simula a realização da conexão com a BD
    console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
}

//* SINGLETON -> Garantimos que seja criado apenas uma instancia de uma determinada classe
const db1 = DataBase.getDataBase('localhost', 'root', '123456'); // Uso do método estático -> cria e instancia a base de dados
db1.connect();

const db2 = DataBase.getDataBase('localhost', 'root', '123456'); // Retorna instancia já criada anteriormente
db2.connect();

const db3 = DataBase.getDataBase('localhost', 'root', '123456'); // Retorna instancia já criada anteriormente
db3.connect();

const db4 = DataBase.getDataBase('localhost', 'root', '123456'); // Retorna instancia já criada anteriormente
db4.connect();

console.log(db1 === db2); // true! ->  todas as variáveis apontam para a mesma e única conexão do sistema.
