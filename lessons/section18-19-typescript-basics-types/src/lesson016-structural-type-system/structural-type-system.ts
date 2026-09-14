/*
Simulação:
  - user: Usuário que temos na Base de Dados
  - sentValue: Valor enviado pelo usuário

  A ideia da função é comparar o valor enviado pelo usuário, com o valor que temos regitrado na Base de Dados e retornar um booleano
*/
type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string, password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  // Ele identifica as chaves automaticamente, pois tipamos a função
  return user.username === sentValue.username && user.password === sentValue.password;
};

// Simulando dados na base de dados
const bdUser = { username: 'João', password: '123456' };
const sentUser = { username: 'João', password: '123456', permissions: '' };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn); // true
