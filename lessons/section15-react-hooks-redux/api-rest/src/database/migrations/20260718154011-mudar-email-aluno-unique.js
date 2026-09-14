'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Altera a coluna 'email' dentro da tabela 'alunos'
    await queryInterface.changeColumn('alunos', 'email', {

      // Edições que vão ocorrer na tabela "alunos" no campo "email"
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    );
  },

  async down() {

  },
};
