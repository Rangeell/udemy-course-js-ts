// User no singular, porque é referente a um dado da tabela "users" da migration

import bcrypt from 'bcryptjs';
import Sequelize, { Model } from 'sequelize';

export default class User extends Model { // Model que importamos de dentro do sequelize
  static init(sequelize) {
    super.init( // Chamamos o init() do Model que extendemos
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '', // Se esse campo não for enviado, conseguimos capturar o erro por ser um campo vazio
          validate: { // Objeto onde fazemos a validação desse campo
            len: {
              args: [3, 255], // Mínimo e máximo respectivamente
              msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
            },
          },
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe',
          },
          validate: {
            isEmail: {
              msg: 'E-mail inválido.',
            },
          },
        },

        password_hash: {
          type: Sequelize.STRING,
        },

        password: { // Campo que vamos receber do usuário
          type: Sequelize.VIRTUAL, // Faz com que o campo exista apenas virtualmente (não disponível na BD)
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'O campo senha deve ter entre 6 e 50 caracteres.',
            },
          },
        },

      },

      { sequelize }); // Nesse objeto basta o sequelize

    this.addHook('beforeSave', async user => { // bcrypt retorna uma promise
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
}
