/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', { // Users no plural
      id: {
        type: Sequelize.INTEGER, // Tipo do campo -> campo do tipo número inteiro
        allowNull: false, // Não permite que o campo fique nulo
        autoIncrement: true, // auto-incremento -> não precisamos enviar o id quando criarmos um aluno (ele conta do 1 em diante automaticamente)
        primaryKey: true, // Indica que esse campo 'id' é a chave primária da tabela
      },

      nome: {
        type: Sequelize.STRING, // Tipo do campo -> campo do tipo String
        allowNull: false,
      },

      email: { // Vamos usar o e-mail como se fosse o usuário para login
        type: Sequelize.STRING,
        allowNull: false,
        unique: true, // Faz com que os campos email sejam únicos na base de dados -> possibilida usar a msg no Model
      },

      password_hash: { // Onde a senha "criptografada" vai ficar armazenada
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE, // Tipo de campo -> campo do tipo data
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE, // Tipo de campo -> campo do tipo data
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('users');
  },
};
