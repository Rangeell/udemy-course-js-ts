import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required!'],
    });
  }

  const [, token] = authorization.split(' '); // Destructuring e serapação pelo espaço -> Bearer token

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados; // Extraindo o payload do token (jwt.sign do TokenController.js)

    req.userId = id;
    req.userEmail = email;

    return next();

  } catch (e) {
    console.log(e);
    return res.status(401).json({
      errors: ['Token expirado ou inválido!'],
    });
  }
};
