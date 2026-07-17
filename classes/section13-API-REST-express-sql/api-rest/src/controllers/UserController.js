/*
Vamos sempre usar async/await aqui -> mexemos com dados do BD e isso sempre retorna promises onde temos que esperar o retorno da resposta
*/

import User from '../models/UserModel';

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json({ novoUser });

    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.json(users);

    } catch (e) {
      console.log(e);
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      res.json(user);

    } catch (e) {
      console.error('Deu erro no Controller:', e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      const novosDados = await user.update(req.body);
      return res.json(novosDados);

    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        res.status(400).json({
          errors: ['ID não enviado!'],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe!'],
        });
      }

      await user.destroy();
      return res.json({
        Usuário_deletado: [user],
      });

    } catch (e) {
      console.error(e);
      return res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }
}

export default new UserController();
