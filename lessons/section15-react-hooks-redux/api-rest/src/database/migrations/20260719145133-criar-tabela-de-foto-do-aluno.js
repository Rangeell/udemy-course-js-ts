'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER, // Tipo do campo -> campo do tipo número inteiro
        allowNull: false, // Não permite que o campo fique nulo
        autoIncrement: true, // auto-incremento -> não precisamos enviar o id quando criarmos um aluno (ele conta do 1 em diante automaticamente)
        primaryKey: true, // Indica que esse campo 'id' é a chave primária da tabela
      },

      originalname: { // Nome atribuído pelo usuário
        type: Sequelize.STRING, // Tipo do campo -> campo do tipo String
        allowNull: false,
      },

      filename: { // Nome que atribuímos nas configurações do multer
        type: Sequelize.STRING, // Tipo do campo -> campo do tipo String
        allowNull: false,
      },

      aluno_id: { // id da tabela "alunos" -> campo filho da tabela "alunos" -> segue o que outra tabela faz
        type: Sequelize.INTEGER,
        allowNull: true, // Permitimos isso por conta da linha 32
        references: {
          model: 'alunos', // Nome da tabela que queremos referenciar
          key: 'id', // Chave que vamos usar para referenciar (id é uma chave única para cada aluno)
        },

        onDelete: 'SET NULL', // Se deletar o aluno, o ID na foto fica nulo
        onUpdate: 'CASCADE', // Propaga alterações de ID
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
    await queryInterface.dropTable('fotos');
  },
};
