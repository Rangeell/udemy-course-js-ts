import jwt from 'jsonwebtoken';
import User from '../models/UserModel';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required!'],
    });
  }

  const [, token] = authorization.split(' '); // Destructuring e serapação pelo espaço -> [Bearer, Token]

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados; // Extraindo o payload do token (jwt.sign do TokenController.js)

    const user = await User.findOne({ // Chegamos se o id e email batem com o do token atual
      where: {
        id,
        email,
      },
    });

    // Se o usuário mudou de e-mail ou foi deletado, o token antigo é invalidado imediatamente
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário inválido!'],
      });
    }

    // Injeta os dados do usuário logado diretamente no objeto req
    req.userId = id; // Fica disponivel para o próxima middleware da rota
    req.userEmail = email; // Fica disponivel para o próxima middleware da rota

    return next();

  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }
};
