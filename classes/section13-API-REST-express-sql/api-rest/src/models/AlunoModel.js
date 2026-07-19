// Aluno no singular, porque é referente a um dado da tabela "alunoS" da migration

import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model { // Model que importamos de dentro do sequelize
  static init(sequelize) {
    super.init( // Chamamos o init() do Model que extendemos
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome deve ter entre 3 e 255 caracteres!',
            },
          },
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: true,
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome deve ter entre 3 e 255 caracteres',
            },
          },
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe!',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido!',
            },
          },
        },

        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um número inteiro!',
            },
          },
        },

        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um número inteiro ou de ponto flutuante',
            },
          },
        },

        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um número inteiro ou de ponto flutuante',
            },
          },
        },

      },

      { sequelize }); // Nesse objeto basta o sequelize

    return this;
  }

  static associate(models) { // Relação aluno para foto
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
}
