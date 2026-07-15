// Aluno no singular, porque é referente a um dado da tabela "alunoS" da migration

import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model { // Model que importamos de dentro do sequelize
  static init(sequelize) {
    super.init( // Chamamos o init() do Model que extendemos
      {
        nome: Sequelize.STRING,
        sobrenome: Sequelize.STRING,
        email: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        peso: Sequelize.FLOAT,
        altura: Sequelize.FLOAT,
      },

      { sequelize }); // Nesse objeto basta o sequelize
    return this;
  }
}
