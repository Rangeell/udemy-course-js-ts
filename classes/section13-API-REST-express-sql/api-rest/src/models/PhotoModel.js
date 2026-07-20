// Photo no singular, porque é referente a um dado da tabela "alunoS" da migration

import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';

export default class Photo extends Model { // Model que importamos de dentro do sequelize
  static init(sequelize) {
    super.init( // Chamamos o init() do Model que extendemos
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio!',
            },
          },
        },

        filename: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            notEmpty: {
              msg: 'Campo não pode ficar vazio!',
            },
          },
        },

        url: {
          type: Sequelize.VIRTUAL,
          get() {
            // "Pega" o nome do arquivo (valor do campo) e concatena com a URL
            return `${appConfig.url}/images/${this.getDataValue('filename')}`;
          },
        },

      },

      { sequelize, tableName: 'fotos' });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
    // Primeiro argumento -> a quem esse model pertence? -> percente ao aluno
    // Segundo argumento -> foreingKey desse mondel
  }
}
