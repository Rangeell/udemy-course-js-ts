import User from '../models/UserModel';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

class TokenController {
  async store(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credencias inválidas!'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe!'],
        });
      }

      if (!(await user.passwordIsValid(password))) {
        return res.status(401).json({
          errors: ['Senha inválida!'],
        });
      }

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET,
        { expiresIn: process.env.TOKEN_EXPIRATIONS });

      return res.json({ token });

    } catch (e) {
      res.status(400).json({
        errors: e.errors.map(err => err.message),
      });
    }
  }

}

export default new TokenController();
